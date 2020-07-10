


fetch("https://sivers.org/en.atom")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {



        let entries = data.querySelectorAll("entry");

        for (let i = 0;i < entries.length; i++) {



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

        //entry author
        let entryAuthor = document.createElement("span");
        entryAuthor.classList.add("entry-author");
        let entryAuthorText = data.querySelector("author name").innerHTML;
        entryAuthor.innerText = entryAuthorText;
        //console.log(entryAuthorText);
        document.querySelector(".feed-entry").appendChild(entryAuthor);

        //entry content
        let entryContent = document.createElement("p");
        entryContent.classList.add("entry-content");
        let entryContentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        entryContent.innerText = entryContentText;
        document.querySelector(".feed-entry").appendChild(entryContent);

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



// ;       let entries = data.querySelectorAll("entry");
//         let author = data.querySelector("author").innerHTML;

        // for(let i = 0; i < entries.length; i++) {
        //
        //
        //
        //     let title = entries[i].querySelector("title").innerHTML;
        //     let date = entries[i].querySelector("updated").innerHTML;
        //     let dateObj = new Date(date);
        //     let dateString = dateObj.toDateString();
        //     let link = entries[i].querySelector("link");
        //     let linkURL = link.getAttribute("href");
        //     let content = entries[i].querySelector("content").innerHTML;
        //
        //     let div = document.createElement("div");
        //     let h5 = document.createElement("h5");
        //     let dateParagraph = document.createElement("p");
        //     let contentParagraph = document.createElement("p");
        //     let a = document.createElement("a");
        //     let authorText = document.createElement("p");
        //
        //
        //
        //     h5.innerText = title;
        //     dateParagraph.innerText = dateString;
        //     contentParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        //     a.setAttribute("href", linkURL);
        //     a.innerText = "...";
        //
        //     div.appendChild(h5);
        //     div.appendChild(dateParagraph);
        //     div.appendChild(contentParagraph);
        //     div.appendChild(a);
        //
        //
        //     document.querySelector(".articles").appendChild(div);


            // let li = document.createElement("li");
            // let node = document.createTextNode(articles[i].innerHTML);
            // li.appendChild(node);
            // let articlesListDiv = document.querySelector(".articles-list");
            // articlesListDiv.appendChild(li);

        //}
        //console.log(articles[1].innerHTML);
