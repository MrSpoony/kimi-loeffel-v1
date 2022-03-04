const modeSwitch = document.getElementById('mode-switch');

let currTheme = "light";
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    currTheme = savedTheme;
}


function switchModes() {
    if (currTheme === 'light') {
        currTheme = 'dark';
    } else {
        currTheme = 'light';
    }
    document.documentElement.setAttribute('theme', currTheme);
    localStorage.setItem('theme', currTheme);
}

modeSwitch.addEventListener("click", switchModes);