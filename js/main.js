
const sivers_rss = "https://sivers.org/en.atom";
fetch(sivers_rss)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        //console.log(data)
;       let articles = data.querySelectorAll("title");
        for(let i = 1; i < articles.length; i++) {
            //console.log(articles[i].innerHTML);
            let li = document.createElement("li");
            let node = document.createTextNode(articles[i].innerHTML);
            li.appendChild(node);
            let articlesListDiv = document.querySelector(".articles-list");
            articlesListDiv.appendChild(li);

        }
        //console.log(articles[1].innerHTML);
    });
