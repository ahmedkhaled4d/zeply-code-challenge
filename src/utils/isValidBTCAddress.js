// Javascript program to validate
//BITCOIN Address using Regular Expression

// Function to validate the
// BITCOIN Address
export const isValidBTCAddress = function (str) {
  // Regex to check valid
  // BITCOIN Address
  let address = new RegExp(/^(bc1|[13])[a-km-zA-HJ-NP-Z1-9]{25,34}$/);
  let hash = new RegExp(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/);

  // if str
  // is empty return false
  if (str === null || str === '') {
    return false;
  }

  // Return true if the str
  // matched the ReGex
  if (address.test(str) == true) {
    return 'address';
  }
  if (hash.test(str) == true) {
    return 'tnx';
  } else {
    return false;
  }
};
