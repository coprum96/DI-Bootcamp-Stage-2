const editor = document.getElementById("editor");
const cursor = document.querySelector(".cursor");

const text = document.querySelector('.text')
let index = 0;

function type() {
  editor.textContent += text.charAt(index);
  index++;
  if (index >= text.length) {
    clearInterval(typing);
  }
}

const typing = setInterval(type, 100);

function blinkCursor() {
  cursor.classList.toggle("hidden");
}

setInterval(blinkCursor, 800);
