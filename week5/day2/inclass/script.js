const checkEmail = (email) => {
    try {
      if (email !== includes('@')) {
        throw new Error ('your email is incorrect')
      }
      console.log('good')
    } catch (err) {
      console.log("Caught the error:", err.message);
    }
  };
  
checkEmail("johnsmith.com") // throw an exception that is caught
checkEmail("john@smith.com")  // will still run because the exception was caught