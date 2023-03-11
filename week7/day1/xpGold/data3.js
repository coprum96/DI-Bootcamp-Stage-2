function getTimeFromNowToNextHoliday() {
    const now = new Date();
  const holidayName = 'Deutschland'; 
  const nextHoliday = new Date(`03/16/${now.getFullYear()}`); 


  if (nextHoliday < now) {
    nextHoliday.setFullYear(nextHoliday.getFullYear() + 1);
  }

  const timeUntilHoliday = nextHoliday.getTime() - now.getTime();
  const days = Math.floor(timeUntilHoliday / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeUntilHoliday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilHoliday % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeUntilHoliday % (1000 * 60)) / 1000);

  return `The next holiday is ${holidayName}, which is in ${days} days, ${hours}:${minutes}:${seconds} hours.`;
}
  
  module.exports = getTimeFromNowToNextHoliday;