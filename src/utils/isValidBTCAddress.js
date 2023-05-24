// Javascript program to validate
//BITCOIN Address using Regular Expression

// Function to validate the
// BITCOIN Address
export const isValidBTCAddress = function (str) {
  // Regex to check valid
  // BITCOIN Address
  let regex = new RegExp(/^(bc1|[13])[a-km-zA-HJ-NP-Z1-9]{25,34}$/);

  // if str
  // is empty return false
  if (str == null) {
    return false;
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) == true) {
    return true;
  } else {
    return false;
  }
};
