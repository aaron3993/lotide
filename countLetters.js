const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = word => {
  const output = {}
  for (let letter of word.split(' ').join('')) {
    if (output[letter]) {
      output[letter]++
    } else {
      output[letter] = 1
    }
  }
  return output
}

module.exports = countLetters