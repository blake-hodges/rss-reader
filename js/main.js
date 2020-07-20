
let siversData = [];
let tynanData = [];
let zakasData = [];


fetch("https://sivers.org/en.atom")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {

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
            //get url of blog article
            siversData[i]["url"] = entries[i].querySelector("link").getAttribute("href");

        }
    })
    .then( () => {
        displayPosts(siversData);
    });

fetch("http://feeds.feedburner.com/tynan?format=xml")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let xmlContent = data;
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
            //get url of blog article
            tynanData[i]["url"] = entries[i].querySelector("link").innerHTML;



        }
    })
    .then( () => {
        displayPosts(tynanData);
    });

fetch("http://feeds.feedburner.com/nczonline?format=xml")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let xmlContent = data;
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
            //get url of blog article
            zakasData[i]["url"] = entries[i].querySelector("link").innerHTML;

        }
    })
    .then( () => {
        displayPosts(zakasData);
    });

    function displayPosts(dataObj) {

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



        //add horizontal rule after each entryTitle
        let hr = document.createElement("hr");
        document.querySelector(".feed-entry").appendChild(hr);
        feedEntry.appendChild(hr);


        }
    }
