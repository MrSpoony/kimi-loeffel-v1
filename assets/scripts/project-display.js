let projects = document.querySelector(".projects");
let projectsElements = [];
let projectArticles = [];
const projectDirs= ["001", "002", "003"]

projects.childNodes.forEach(potentialProject => {
    if (potentialProject.nodeType === Node.ELEMENT_NODE) projectArticles.push(potentialProject);
});

projectArticles.forEach(projectArticle => {
    articleElements = []
    projectArticle.childNodes.forEach(link => {
        if (link.nodeType === Node.ELEMENT_NODE) {
            articleElements.push(link);
            link.childNodes.forEach(element => {
                if (element.nodeType === Node.ELEMENT_NODE) {
                    articleElements.push(element);
                }
            })
        }
    });
    projectsElements.push(articleElements);
});

let index = 0;
projectsElements.forEach(article => {
    article.forEach(element => {
        if (element.href) element.href = element.href.replace("XXX", projectDirs[index]);
        if (element.src) element.src = element.src.replace("XXX", projectDirs[index]);
        if (element.alt) element.alt = element.alt.replace("XXX", index+1)
        console.log(element.href)
        console.log(element.src);
    });
    index++;
});