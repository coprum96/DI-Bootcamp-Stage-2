$(document).ready(function() {
    $(".print").typeText({
      typeSpeed: 50, // time delay between each character
      lineWait: 1000, // time delay between each line
      then: function() {
        console.log("Text typing finished!"); // a callback function to run after typing is finished
      }
    });
  });