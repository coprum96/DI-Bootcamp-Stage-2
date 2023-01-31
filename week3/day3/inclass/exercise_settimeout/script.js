setTimeout(createBanner, 2000);

function createBanner () {
    const section = document.querySelector("#container");
    const banner = document.createElement("p");
    const text = document.createTextNode("The sales end in 5sec");
    banner.appendChild(text);
    section.appendChild(banner);
}

// function createBanner () {
//     const p = document.querySelector("#p1");
//     p.classList.toggle("para");
// }