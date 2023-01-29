// Daily Challenge
// Instructions
// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

// ==============================
// Example
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================



// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.

// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.

let userNumber = prompt("Enter the number of bottles to begin counting down:");
let counter = 0;

function song(i) {
    let objects;
    let objectsMinusOne;
    if (i === 0) {
        objects = 'bottle';
    } else if (i === 1) {
        objects = 'bottle';
        objectsMinusOne = 'bottles';
    } else {
        objects = 'bottles';
        objectsMinusOne = 'bottles';
    }
    if (i > 0) {
        console.log(`${i} ${objects} of beer on the wall, ${i} ${objects} of beer.`);
        if (i === 1) {
            console.log(`Take ${++counter} down and pass it around, ${i - 1} ${objectsMinusOne} of beer on the wall.`);
        } else {
            console.log(`Take ${++counter} down and pass them around, ${i - 1} ${objectsMinusOne} of beer on the wall.`);
        }
        console.log('');
    } else if (i === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}

let bottles = userNumber;
while (bottles >= 0) {
    song(bottles);
    bottles -= 1;
}

song()