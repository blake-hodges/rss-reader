


fetch("https://sivers.org/en.atom")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {

        //console.log(data);

        let entries = data.querySelectorAll("entry");

        for (let i = 0;i < 10; i++) {



        //div for feed entries
        let feedEntry = document.createElement("div");
        feedEntry.classList.add("feed-entry");
        document.querySelector(".feed-wrapper").appendChild(feedEntry);

        //entry title
        let entryTitle = document.createElement("h5");
        entryTitle.classList.add("entry-title");
        let entryTitleText = entries[i].querySelector("title").innerHTML;
        entryTitle.innerText = entryTitleText;
        document.querySelector(".feed-entry").appendChild(entryTitle);

        //entry author, site
        let entryAuthor = document.createElement("span");
        entryAuthor.classList.add("entry-author");
        entryAuthor.innerText = "Derek Sivers | sivers.org";
        document.querySelector(".feed-entry").appendChild(entryAuthor);

        //entry content
        let entryContent = document.createElement("p");
        entryContent.classList.add("entry-content");

        //parse text with a regular expression to remove html tags
        let content = entries[i].querySelector("content").innerHTML;
        //console.log(content);
        let domParser = new DOMParser();
        let parsedHTML = domParser.parseFromString(content, "text/html");
        let x = parsedHTML.querySelector("body").innerHTML;
        //console.log(x);
        let y = x.match(/&lt;p&gt;[\s\S]+?&lt;\/p&gt;/);
        //console.log(y[0]);
        //console.log(y[0]);
        let strOne = y[0];
        let strTwo = strOne.replace(/&lt;.+?&gt;/g, "");
        console.log(strTwo);
        entryContent.innerText = strTwo;
        document.querySelector(".feed-entry").appendChild(entryContent);

        //date
        let date = document.createElement("p");
        date.classList.add("entry-date");
        let dateString = entries[i].querySelector("updated").innerHTML;
        let dateObj = new Date(dateString);
        date.innerText = dateObj.toDateString();
        document.querySelector(".feed-entry").appendChild(date);

        //link to blog article
        let link = document.createElement("a");
        link.classList.add("entry-link");
        let linkText = entries[i].querySelector("link").getAttribute("href");
        link.innerText = linkText;
        link.setAttribute("href", linkText);
        document.querySelector(".feed-entry").appendChild(link);



        //add horizontal rule after each entryTitle
        let hr = document.createElement("hr");
        document.querySelector(".feed-entry").appendChild(hr);

    //end for loop
    }


    });

fetch("http://feeds.feedburner.com/tynan?format=xml")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let xmlContent = data;
        //console.log(data);
        let entries = data.querySelectorAll("item");

        for(let i = 0;i < entries.length;i++) {

        //div for feed entries
        let feedEntry = document.createElement("div");
        feedEntry.classList.add("feed-entry");
        document.querySelector(".feed-wrapper").appendChild(feedEntry);

        //entry title
        let entryTitle = document.createElement("h5");
        entryTitle.classList.add("entry-title");
        let entryTitleText = entries[i].querySelector("title").innerHTML;
        entryTitle.innerText = entryTitleText;
        document.querySelector(".feed-entry").appendChild(entryTitle);

        //entry author, site
        let entryAuthor = document.createElement("span");
        entryAuthor.classList.add("entry-author");
        entryAuthor.innerText = "Tynan | tynan.com";
        document.querySelector(".feed-entry").appendChild(entryAuthor);

        //entry content
        let entryContent = document.createElement("p");
        entryContent.classList.add("entry-content");
        let entryContentText = entries[i].getElementsByTagName("content:encoded").item(0).innerHTML;
        let domParser = new DOMParser();
        let parsedHTML = domParser.parseFromString(entryContentText, "text/html");
        let firstP = parsedHTML.querySelector("p:nth-child(3)").innerText;
        let firstPFormatted = firstP.substring(0, firstP.length - 1);
        entryContent.innerText = firstPFormatted + "...";
        document.querySelector(".feed-entry").appendChild(entryContent);

        //date
        let date = document.createElement("p");
        date.classList.add("entry-date");
        let dateString = entries[i].querySelector("pubDate").innerHTML;
        let dateObj = new Date(dateString);
        date.innerText = dateObj.toDateString();
        document.querySelector(".feed-entry").appendChild(date);

        //link to blog article
        let link = document.createElement("a");
        link.classList.add("entry-link");
        let linkText = entries[i].querySelector("link").innerHTML;
        link.setAttribute("href", linkText);
        link.innerText = linkText;
        document.querySelector(".feed-entry").appendChild(link);


        //add horizontal rule after each entryTitle
        let hr = document.createElement("hr");
        document.querySelector(".feed-entry").appendChild(hr);

        //end loop
        }
    });

fetch("http://feeds.feedburner.com/nczonline?format=xml")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let xmlContent = data;
        //console.log(data);
        let entries = data.querySelectorAll("item");

        for(let i = 0;i < entries.length;i++) {

        //div for feed entries
        let feedEntry = document.createElement("div");
        feedEntry.classList.add("feed-entry");
        document.querySelector(".feed-wrapper").appendChild(feedEntry);

        //entry title
        let entryTitle = document.createElement("h5");
        entryTitle.classList.add("entry-title");
        let entryTitleText = entries[i].querySelector("title").innerHTML;
        entryTitle.innerText = entryTitleText;
        document.querySelector(".feed-entry").appendChild(entryTitle);

        //entry author, site
        let entryAuthor = document.createElement("span");
        entryAuthor.classList.add("entry-author");
        entryAuthor.innerText = "Nicolas Zakas | humanwhocodes.com";
        document.querySelector(".feed-entry").appendChild(entryAuthor);

        //entry content
        let entryContent = document.createElement("p");
        entryContent.classList.add("entry-content");
        let entryContentText = entries[i].getElementsByTagName("description").item(0).innerHTML;
        entryContent.innerText = entryContentText;
        document.querySelector(".feed-entry").appendChild(entryContent);

        //date
        let date = document.createElement("p");
        date.classList.add("entry-date");
        let dateString = entries[i].querySelector("pubDate").innerHTML;
        let dateObj = new Date(dateString);
        date.innerText = dateObj.toDateString();
        document.querySelector(".feed-entry").appendChild(date);

        //link to blog article
        let link = document.createElement("a");
        link.classList.add("entry-link");
        let linkText = entries[i].querySelector("link").innerHTML;
        link.setAttribute("href", linkText);
        link.innerText = linkText;
        document.querySelector(".feed-entry").appendChild(link);


        //add horizontal rule after each entryTitle
        let hr = document.createElement("hr");
        document.querySelector(".feed-entry").appendChild(hr);

        //end loop
        }
    });
