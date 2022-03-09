'use strict'

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav')
const navBG = document.querySelector('.nav-background')
const navElements = document.querySelectorAll('nav li')
const movingBar = document.querySelector('#hamburger .line:nth-child(4)');

let navToggle = false;


function resetBar() {
    movingBar.style.opacity = 0;
}

function setPos(pos) {
    movingBar.style.top = pos + 4 + 'px';
}

function setBarYToLinkOfCurrentSite() {
    let paths = {
        "/": "index",
        "/index.html": "index",
        "/projects": "projects",
        "/projects/index.html": "projects",
        "/about-me": "about-me",
        "/about-me/index.html": "about-me",
        "/impressum": "impressum",
        "/impressum/index.html": "impressum",
    };

    const index = 'index.html';
    let loc = location.pathname;
    if (loc.endsWith(index)) loc = loc.slice(0, loc.length - index.length);
    for (let path in paths) {
        for (let navElement of navElements) {
            let link;
            for (let element of navElement.childNodes)
                if (element.nodeType === Node.ELEMENT_NODE) link = element;
            if (!paths[loc]) {
                if (!loc.includes(link.id)) continue;
                const y = navElement.getBoundingClientRect().y;
                movingBar.style.position = "absolute";
                setPos(y);
                break;
            }
            if (paths[loc] != link.id) continue;
            const y = navElement.getBoundingClientRect().y;
            movingBar.style.position = "absolute";
            setPos(y);
            break;
        }
    }
}

function toggleNav() {
    hamburger.classList.toggle('is-open');
    navBG.classList.toggle('overlay');
    if (navToggle) resetBar();
    else {
        setBarYToLinkOfCurrentSite();
        movingBar.style.opacity = 100;
    }
    navToggle = !navToggle;
}

function moveBar(e) {
    const y = e.target.getBoundingClientRect().y;
    setPos(y);
}

setBarYToLinkOfCurrentSite();

hamburger.addEventListener('click', toggleNav)

for (let element of navElements) {
    element.addEventListener('mouseover', moveBar);
}