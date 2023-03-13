let container = document.querySelector('.container');
let days = ['mo', 'tu', 'wed', 'tur', 'fr','sa', 'sun']

function createCalendar(year, month) {
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    container.appendChild(table);

    makeHead(table, days);
}

function makeHead(table, days) {
    let header = document.createElement('tr');
    for(let i = 0; i < days.length; i++) {
        let headerCell = document.createElement('th');
        headerCell.innerHTML = days[i];
        header.appendChild(headerCell);
    }
    table.appendChild(header);
}

function makeCells(table, year, month) {
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDay = new Date(year, month, 1).getDay();
    let row = document.createElement('tr');
    for (let i = 0; i < firstDay; i++) {
        let cell = document.createElement('td');
        row.appendChild(cell);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        let cell = document.createElement('td');
        cell.innerHTML = i;
        row.appendChild(cell);
        if ((i + firstDay) % 7 == 0) {
            table.appendChild(row);
            row = document.createElement('tr');
        }
    }
    table.appendChild(row);
}

createCalendar(2023, 3);
makeCells(document.getElementById('table'), 2012, 9);
