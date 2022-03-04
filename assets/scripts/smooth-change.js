const links = document.querySelectorAll('a');

function clickEvent(e) {
    e.preventDefault();
    let element = e.target;
    while (element.nodeName !== "A") {
        element = element.parentElement;
    }
    let href = element.href;
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