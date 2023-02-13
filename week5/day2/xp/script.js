// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.onload = function () {
    if (xhr.status !== 200) {
        console.error("Error:", xhr.statusText);
    } else {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
};

xhr.send();


// 🌟 Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

const xhrSun = new XMLHttpRequest();

xhrSun.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhrSun.onload = function () {
if (xhrSun.status !== 200) {
console.error("Error:", xhr.statusText);
} else {
const data = JSON.parse(xhrSun.response);
console.log(data);
}
};

xhrSun.send();




