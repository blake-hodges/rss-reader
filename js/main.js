
const sivers_rss = "https://sivers.org/en.atom";
fetch(sivers_rss)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
;       let entries = data.querySelectorAll("entry");

        for(let i = 0; i < entries.length; i++) {

            let author = "Derek Sivers";
            let title = entries[i].querySelector("title").innerHTML;
            let date = entries[i].querySelector("updated").innerHTML;
            let dateObj = new Date(date);
            let dateString = dateObj.toDateString();
            let link = entries[i].querySelector("link");
            let linkURL = link.getAttribute("href");
            let content = entries[i].querySelector("content").innerHTML;

            let div = document.createElement("div");
            let h5 = document.createElement("h5");
            let dateParagraph = document.createElement("p");
            let contentParagraph = document.createElement("p");
            let a = document.createElement("a");



            h5.innerText = title;
            dateParagraph.innerText = dateString;
            contentParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            a.setAttribute("href", linkURL);
            a.innerText = "...";

            div.appendChild(h5);
            div.appendChild(dateParagraph);
            div.appendChild(contentParagraph);
            div.appendChild(a);


            document.querySelector(".articles").appendChild(div);


            // let li = document.createElement("li");
            // let node = document.createTextNode(articles[i].innerHTML);
            // li.appendChild(node);
            // let articlesListDiv = document.querySelector(".articles-list");
            // articlesListDiv.appendChild(li);

        }
        //console.log(articles[1].innerHTML);
    });
