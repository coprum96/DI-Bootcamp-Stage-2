// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

 

async function convert() { 
    try {
    let response = await fetch("https://www.swapi.tech/api/starships/9/");
    let objectStarWars = await response.json();
    console.log(objectStarWars.result)
    } catch (error) {
        console.log(error);
    }
}

convert()


// 🌟 Exercise 2: Analyze
// Instructions


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
} 

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// 1. calling 
// 2. promise
// 2. resolved
