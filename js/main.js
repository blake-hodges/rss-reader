


fetch("https://sivers.org/en.atom")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {

        console.log(data);

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
        let entryContentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        entryContent.innerText = entryContentText;
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
        console.log(data);
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
        let entryContentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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

fetch("http://feeds.feedburner.com/nczonline?format=xml")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let xmlContent = data;
        console.log(data);
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
        let entryContentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
