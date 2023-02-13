// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.




const form = document.getElementById('form');
const input = document.getElementById('input');
const container = document.getElementById('container');

form.addEventListener('submit', gifSearch);

function gifSearch(e) {
    e.preventDefault();
    const keyword = input.value;
    const xhr = new XMLHttpRequest();

    xhr.open(
        'GET',
        `https://api.giphy.com/v1/gifs/search?q=${keyword}&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );

    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.error("Error:", xhr.statusText);
        } else {
            const data = JSON.parse(xhr.response);
            const gif = data.data[Math.floor(Math.random() * data.data.length)].images.fixed_height.url;
            const img = document.createElement('img');
            img.src = gif;
            container.innerHTML = '';
            container.appendChild(img);

            const deleteButton = document.createElement('button');
            const deleteAllButton = document.createElement('button')
            deleteAllButton.textContent = 'Delete All'
            deleteButton.textContent = "Delete";
            container.appendChild(deleteButton);
            container.appendChild(deleteAllButton)
            deleteAllButton.addEventListener('click', removeGif)
            deleteButton.addEventListener('click', removeGif);


            function removeGif() {
                img.remove();
            }
        }
    };
    xhr.send();
}

