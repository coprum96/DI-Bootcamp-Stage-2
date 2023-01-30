const allBooks = [
    {
        title:"HarryPotter",
        author:"JK Rolling",
        image: "HP.jpg",
        alreadyRead: true,
    },
    {
        title:"Lord of the Rings",
        author:"JRR Tolken",
        image: "LR.jpg",
        alreadyRead: true,
    }, 
    {
        title:"The Outsiders",
        author:"Se Enton",
        image: "out.jpg",
        alreadyRead: false,
    }
]


function buildTable () {    
    const divContainer = document.querySelector(".listBooks")
    const table = document.createElement("table");
    
    buildHead(table); //build the th 

    //loops through allBooks array, and for each book, create a row
    // and call the buildContent function
    for (let book of allBooks) {
        const rowContent = document.createElement("tr");
        buildContent(table, rowContent, book);
    }

    divContainer.appendChild(table);
}

buildTable()

function buildHead (table) {
    const heads = ["title", "author", "image"];
    const rowHead = document.createElement("tr");
    for(let i = 0; i<heads.length; i++){
        const tHead = document.createElement("th");
        const contentHead = document.createTextNode(heads[i]);
        tHead.appendChild(contentHead);
        rowHead.appendChild(tHead);
    } 

    table.appendChild(rowHead);
}

function buildContent (table, rowContent, book) {
    for(let key in book){
        const tcontent = document.createElement("td");
        if (key === "alreadyRead"){
            break;
        } else if (key === "image"){
            const image = document.createElement("img");
            image.setAttribute("src", book["image"])
            tcontent.appendChild(image);
        } else {
            const text = document.createTextNode(book[key]);
            tcontent.appendChild(text);
        }
        
        if(book["alreadyRead"] === true){
            rowContent.style.color = "red"
        }
        
        rowContent.appendChild(tcontent)
    }
    table.appendChild(rowContent);
}
    