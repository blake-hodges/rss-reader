//to do {
//
// clean up fetch functions
// get rid of variables in global scope

//https://cors-anywhere.herokuapp.com/https://sivers.org/en.atom
//https://cors-anywhere.herokuapp.com/http://feeds.feedburner.com/tynan?format=xml
//https://cors-anywhere.herokuapp.com/http://feeds.feedburner.com/nczonline?format=xml


let siversData = [];
let tynanData = [];
let zakasData = [];

let blogPostsArr = [];




fetch("https://cors-anywhere.herokuapp.com/https://sivers.org/en.atom")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        storeSiversData(data);
        fetch("https://cors-anywhere.herokuapp.com/http://feeds.feedburner.com/tynan?format=xml")
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                storeTynanData(data);
                fetch("https://cors-anywhere.herokuapp.com/http://feeds.feedburner.com/nczonline?format=xml")
                    .then(response => response.text())
                    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
                    .then(data => {
                        storeZakasData(data);
                        let blogPostsSorted = blogPostsArr.sort(sortByDate);
                        let reversed = blogPostsSorted.reverse();

                        displayPosts(reversed);
                    });
            })
            .catch((error) => console.log(error));

    });




    function storeSiversData(data) {
        let entries = data.querySelectorAll("entry");

        for (let i = 0;i < 10; i++) {
            //create nested object for each blog entry
            siversData[i] = {};
            //get title and blog info
            siversData[i]["title"] = entries[i].querySelector("title").innerHTML;
            siversData[i]["site"] = "Derek Sivers | sivers.org";
            //get content of blog entry
            //parse data for blog content with a regular expression to remove html tags
            let content = entries[i].querySelector("content").innerHTML;
            let domParser = new DOMParser();
            let parsedHTML = domParser.parseFromString(content, "text/html");
            let x = parsedHTML.querySelector("body").innerHTML;
            let y = x.match(/&lt;p&gt;[\s\S]+?&lt;\/p&gt;/);
            let strOne = y[0];
            let strTwo = strOne.replace(/&lt;.+?&gt;/g, "");
            siversData[i]["content"] = strTwo;
            //get date info
            let dateString = entries[i].querySelector("updated").innerHTML;
            let dateObj = new Date(dateString);
            siversData[i]["date"] = dateObj.toDateString();
            //get utc from date object
            siversData[i]["utc"] = Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
            //get url of blog article
            siversData[i]["url"] = entries[i].querySelector("link").getAttribute("href");
            //add entry data to blog posts array
            blogPostsArr.push(siversData[i]);

        }
    }

    function storeTynanData(data) {
        let entries = data.querySelectorAll("item");

        for (let i = 0; i < entries.length; i++) {
            //create nested object for each blog entry
            tynanData[i] = {};
            //get title and blog info
            tynanData[i]["title"] = entries[i].querySelector("title").innerHTML;
            tynanData[i]["site"] = "Tynan | tynan.com";
            //get content of blog entry
            //parse data for blog content
            let entryContentText = entries[i].getElementsByTagName("content:encoded").item(0).innerHTML;
            let domParser = new DOMParser();
            let parsedHTML = domParser.parseFromString(entryContentText, "text/html");
            let firstP = parsedHTML.querySelector("p:nth-child(3)").innerText;
            let firstPFormatted = firstP.substring(0, firstP.length - 1);
            tynanData[i]["content"] = firstPFormatted + "...";
            //get date info
            let dateString = entries[i].querySelector("pubDate").innerHTML;
            let dateObj = new Date(dateString);
            tynanData[i]["date"] = dateObj.toDateString();
            //get utc from date object
            tynanData[i]["utc"] = Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
            //get url of blog article
            tynanData[i]["url"] = entries[i].querySelector("link").innerHTML;
            //add entry data to blog posts array
            blogPostsArr.push(tynanData[i]);
        }
    }

    function storeZakasData(data) {
        let entries = data.querySelectorAll("item");

        for (let i = 0; i < entries.length; i++) {
            //create nested object for each blog entry
            zakasData[i] = {};
            //get title and blog info
            zakasData[i]["title"] = entries[i].querySelector("title").innerHTML;
            zakasData[i]["site"] = "Nicholas C. Zakas | humanwhocodes.com";
            //get content of blog entry
            let entryContentText = entries[i].getElementsByTagName("description").item(0).innerHTML;
            zakasData[i]["content"] = entryContentText;
            //get date info
            let dateString = entries[i].querySelector("pubDate").innerHTML;
            let dateObj = new Date(dateString);
            zakasData[i]["date"] = dateObj.toDateString();
            //get utc from date object
            zakasData[i]["utc"] = Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
            //get url of blog article
            zakasData[i]["url"] = entries[i].querySelector("link").innerHTML;
            //add entry data to blog posts array
            blogPostsArr.push(zakasData[i]);


        }
    }

    //function to sort array of blog posts by utc
    function sortByDate(a, b) {
        let dateA = a.utc;
        let dateB = b.utc;
        let comparison = 0;
        if (dateA > dateB) {
            comparison = 1;
        } else if (dateB > dateA) {
            comparison = -1;
        }
        return comparison;
    }



    function displayPosts(dataObj) {

        //remove spinner
        document.querySelector(".spinner-div").remove();

        for (let i = 0; i < dataObj.length; i++) {

        //div for feed entries
        let feedEntry = document.createElement("div");
        feedEntry.classList.add("feed-entry");
        document.querySelector(".feed-wrapper").appendChild(feedEntry);

        // //entry title
        let entryTitle = document.createElement("h5");
        entryTitle.classList.add("entry-title");
        entryTitle.innerText = dataObj[i].title;
        feedEntry.appendChild(entryTitle);

        // //entry author, site
        let entryAuthor = document.createElement("span");
        entryAuthor.classList.add("entry-author");
        entryAuthor.innerText = dataObj[i].site;
        feedEntry.appendChild(entryAuthor);

        //entry content
        let entryContent = document.createElement("p");
        entryContent.classList.add("entry-content");
        entryContent.innerText = dataObj[i].content;
        feedEntry.appendChild(entryContent);

        // //date
        let date = document.createElement("p");
        date.classList.add("entry-date");
        date.innerText = dataObj[i].date;
        feedEntry.appendChild(date);

        //link to blog article
        let link = document.createElement("a");
        link.classList.add("entry-link");
        let linkText = dataObj[i].url;
        link.innerText = linkText;
        link.setAttribute("href", linkText);
        feedEntry.appendChild(link);



        }
    }
