function getTimeUntilNewYear() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
    const timeUntilNewYear = newYear.getTime() - now.getTime();
  
    const days = Math.floor(timeUntilNewYear / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilNewYear % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilNewYear % (1000 * 60)) / 1000);
  
    return `The 1st January is in ${days} days, ${hours}:${minutes}:${seconds} hours.`;
  }
  
  module.exports = getTimeUntilNewYear;
  