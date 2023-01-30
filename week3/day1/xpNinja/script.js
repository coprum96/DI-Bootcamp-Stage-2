function createCalendar (elem, year, month) {
    let container = document.querySelector(elem);
    let days = ['mo', 'tu', 'wed', 'tur', 'fr','sa', 'sun']
    let data = new Date(year,month, 1)
    let locale = 'en-en'
    let table = document.createElement('table')
    table.setAttribute('id' , 'table')
}

function makeHead (days) {
    let header = document.createElement('tr')
    for(let i = 0; i < days.lenght; i++) {
        let headerCell = document.createElement('th')
        headerCell.innerHTML = days[i]
        header.append(headerCell)
    }
    table.append(header)
}

function makeCell () {
    let row = document.createElement('tr');
    for (let z = 0;)
}