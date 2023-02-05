const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//    Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :


gameInfo.forEach((item, index) => {
    item.username += '!';
});

console.log(gameInfo);

const usernames = gameInfo.map(item => item.username )
console.log(usernames)

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.

const winners = gameInfo.some(user => {
    return user.score > 5;
});

if (winners) {
    const result = gameInfo.filter(user => user.score > 5).map(user => user.username);
    console.log(result);
  }

  
//   Find and display the total score of the users. (Hint: The total score is 71) 
  let total = 0;
  let highestScore = 0;
  let name = '';

const totalScore = () => {
      gameInfo.forEach(info => {
          total += info.score;
          if (info.score > highestScore) {
              highestScore = info.score;
              name = info.username;
          }
      });
  };
  
totalScore();
  console.log("Total score:", total);
  console.log("Highest score:", highestScore);
  console.log("Username with highest score:", name);