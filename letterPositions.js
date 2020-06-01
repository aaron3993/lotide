const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    };
  };
  return true;
};

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual, expected) ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};

const letterPositions = function(sentence) {
  const results = {};
  const word = sentence.split(' ').join('').split('')
    word.forEach((letter, index) => {
      if (results[letter]) {
        results[letter].push(index)
      } else {
        results[letter] = [index]
    }
  })
  return results;
}

console.log(letterPositions("hello"))
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions