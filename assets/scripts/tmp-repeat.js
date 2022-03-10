const projectSec = document.querySelector("section.projects");
if (projectSec !== null) {
    let html = projectSec.innerHTML;
    let finalHtml = "";

    const repeating = 1;

    for (let i = 0; i < repeating; i++) {
        finalHtml += html;
    }

    projectSec.innerHTML = finalHtml;
}