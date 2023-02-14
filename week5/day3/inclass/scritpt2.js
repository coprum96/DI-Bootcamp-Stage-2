//     Exercise : use fetch
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

function gift() {
    fetch('https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
        .then((response) => {
            if (response.status !== 200) {
                console.log("ERROR");
            } else {
                return response.json();
            }
        })
        .then((response) => {
            const img = document.createElement('img');
            img.src = response.data.images.fixed_height.url;
            const container = document.querySelector('.container');
            container.appendChild(img);
        })
        .catch((err) => {
            console.log(err);
        })
}

gift();

function gifTwo() {
    const img = document.createElement('img');
    const container = document.querySelector('.container');
    container.appendChild(img);

    fetch('http://random-word-api.herokuapp.com/word?number=1')
        .then((response) => {
            if (response.status !== 200) {
                console.log("ERROR");
            } else {
                return response.json();
            }
        })
        .then((response) => {
            const word = response[0];
            return fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        })
        .then((response) => {
            if (response.status !== 200) {
                console.log("ERROR");
            } else {
                return response.json();
            }
        })
        .catch((err) => {
            img.alt = "404 ERROR";
            console.log(err);
        })
        
}

gifTwo();


