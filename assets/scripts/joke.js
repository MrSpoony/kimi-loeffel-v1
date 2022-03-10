const joke = document.querySelector('.joke');

async function getJoke() {
    const response = await fetch('https://icanhazdadjoke.com/slack');
    const data = await response.json();
    joke.innerText = data.attachments[0].fallback;
}

getJoke();