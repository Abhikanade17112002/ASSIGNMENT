function formatToIndianNumberSystem(number) {
    // Convert the number to a string
  let numberString = number.toString();

  // Reverse the string to make it easier to insert commas
  let reversed = numberString.split('').reverse().join('');

  // Insert commas at the appropriate positions
  let formatted = '';
  for (let i = 0; i < reversed.length; i++) {
    if (i === 3 || (i > 3 && (i - 3) % 2 === 0)) {
      formatted += ',';
    }
    formatted += reversed[i];
  }

  // Reverse the string back to its original order
  formatted = formatted.split('').reverse().join('');

  // Remove leading comma if any
  if (formatted[0] === ',') {
    formatted = formatted.slice(1);
  }

  return formatted;
  }

  

export default formatToIndianNumberSystem ;