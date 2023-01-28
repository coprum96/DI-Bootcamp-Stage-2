

function song(i) {
    let userNumber = prompt('give a number')
    let objects;
    let objectsMinusOne;
    if (i===1) {
        objects = 'bottle';
        objectsMinusOne = 'bottles';
    } else if (i === 2) {
        objects = 'bottles';
        objectsMinusOne = 'bottle';
    } else {
        objects = 'bottles';
        objectsMinusOne = 'bottles';
    }
    if (i > 0) {
        console.log(`Take ${userNumber} down and pass it around, ${i - 1} ${objectsMinusOne} of beer on the wall.`);
        console.log('');
    } else if (i === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else {
        console.log("where is your beer?");
}
}

let bottles = 99;
while (bottles >= 0) {
    song(bottles);
    bottles -= 1;
}

song()