// Code your solution here
// Function to find matching drivers by name (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to find driver objects where the name matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }