function birthdayAge(birthdate) {
    const dob = new Date(birthdate);
    const now = new Date();
  
    const timeDiff = now.getTime() - dob.getTime();
  
    const minutesLived = Math.floor(timeDiff / (1000 * 60));
  
    return `You have lived for ${minutesLived} minutes.`;
  }
  
  module.exports = birthdayAge;
  