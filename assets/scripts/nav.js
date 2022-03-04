'use strict'

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav')
const navElements = document.querySelectorAll('nav li')
const movingBar = document.querySelector('#hamburger .line:nth-child(4)');

let navToggle = false;


function resetBar() {
    movingBar.style.opacity = 0;
}


function setBarYToLinkOfCurrentSite() {
    let x = {
        '/': 'index',
        '/index.html': 'index',
        '/proects': 'projects',
        '/projects.html': 'projects'
    }
    const loc = location.pathname;
    for (let el of navElements) {
        const a = el.childNodes[0];
        if (x[loc] !== a.id) continue;
        const y = el.getBoundingClientRect().y;
        movingBar.style.position = 'absolute';
        movingBar.style.top = y+'px';
        break;
    }
}

function toggleNav() {
    hamburger.classList.toggle('is-open');
    nav.classList.toggle('overlay');
    if (navToggle) resetBar();
    else {
        setBarYToLinkOfCurrentSite();
        movingBar.style.opacity = 100;
    }
    navToggle = !navToggle;
}

function moveBar(e) {
    const y = e.target.getBoundingClientRect().y;
    movingBar.style.top = y+'px';
}

setBarYToLinkOfCurrentSite();

hamburger.addEventListener('click', toggleNav)
for (let element of navElements) {
    element.addEventListener('mouseover', moveBar)
}