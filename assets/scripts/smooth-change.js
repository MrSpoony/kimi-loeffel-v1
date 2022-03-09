const links = document.querySelectorAll('a');

const exceptionIds = [
    "mode-switch"
];


function clickEvent(e) {
    if (exceptionIds.includes(e.target.id)) return;
    e.preventDefault();
    let element = e.target;
    while (element.nodeName !== "A") {
        element = element.parentElement;
    }
    let href = element.href;
    let target = element.target;
    if (target === "_blank") {
        window.open(href, target);
        return;
    }
    document.querySelector('body').style.opacity = 0;
    setTimeout(function () {
        location.href = href;
    }, 800);
}


for (let link of links) {
    link.addEventListener('click', clickEvent)
}

document.addEventListener('DOMContentLoaded', e => {
    document.querySelector('body').style.opacity = 1;
});