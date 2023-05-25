// Javascript program to validate
//BITCOIN Address using Regular Expression

// Function to validate the
// BITCOIN Address
export const formatValueCurrency = function (value, currency = 'BTC') {
  let str = new Intl.NumberFormat('de-DE', { style: 'currency', currency });
  switch (currency) {
    case 'BTC':
      value = value * 0.00000001;
      break;
    case 'USD':
      value = value * 0.00026735;
      break;
    case 'EUR':
      value = value * 0.00024866;
      break;
    default:
      break;
  }
  return str.format(value);
};
