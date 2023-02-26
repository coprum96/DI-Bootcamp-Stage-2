const largeNumber = 356;

function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
  }

// console.log(largeNumber)

module.exports = {
  largeNumber,
  getCurrentDateTime
};


