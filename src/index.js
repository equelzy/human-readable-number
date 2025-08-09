module.exports = function toReadable(number) {
  if (typeof number !== 'number' || number < 0 || number > 999) {
    throw new Error('Input must be a number between 0 and 999');
  }

  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 10) {
    return units[number];
  }

  if (number < 20) {
    if (number === 10) return tens[0];
    return teens[number - 11];
  }

  if (number < 100) {
    const tenPart = tens[Math.floor(number / 10) - 1];
    const unitPart = number % 10 === 0 ? '' : ` ${units[number % 10]}`;
    return tenPart + unitPart;
  }

  const hundreds = [
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];

  const hundredPart = hundreds[Math.floor(number / 100) - 1];
  const rest = number % 100;

  if (rest === 0) {
    return hundredPart;
  }

  return `${hundredPart} ${toReadable(rest)}`;
};
