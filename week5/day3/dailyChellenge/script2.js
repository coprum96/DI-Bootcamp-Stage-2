// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)


const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJS(morse) {
  return new Promise((resolve, reject) => {
    if (morse) {
      try {
        const obj = JSON.parse(morse);
        resolve(obj);
      } catch (err) {
        reject(new Error("Invalid JSON string"));
      }
    } else {
      reject(new Error("No input provided"));
    }
  });
}

function toMorse(morseObj) {
  const userAnswer = prompt('Enter a word or sentence:');
  return new Promise((resolve, reject) => {
    if (typeof userAnswer !== 'string') {
      reject(new Error('Invalid input: not a string'));
    } else {
      const words = userAnswer.toLowerCase().split(' ');
      const morseTranslation = words.map(word => {
        const letters = word.split('');
        return letters.map(letter => {
          if (morseObj[letter]) {
            return morseObj[letter];
          }
        }).filter(Boolean);
      });
      resolve(morseTranslation);
    }
  });
}

function joinWords(morseTranslation) {
  const container = document.createElement('div');
  for (const word of morseTranslation) {
    const p = document.createElement('p');
    const text = document.createTextNode(word.join(' '));
    p.appendChild(text);
    container.appendChild(p);
  }
  document.body.appendChild(container);
}

toJS(morse)
  .then(morseObj => toMorse(morseObj))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(err => console.error(err));

  