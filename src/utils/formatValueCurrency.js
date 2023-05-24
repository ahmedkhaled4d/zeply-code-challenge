// Javascript program to validate
//BITCOIN Address using Regular Expression

// Function to validate the
// BITCOIN Address
export const formatValueCurrency = function (value, currency) {
  let str = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency
  });
  switch (currency) {
    case 'BTC':
      str.format(value * 0.00000001);
      break;
    case 'USD':
      str.format(value * 0.00026735);
      break;
    case 'EUR':
      str.format(value * 0.00024866);
      break;
    default:
      str.format(value);
  }

  return str;
};
