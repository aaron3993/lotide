const eqArrays = (arr1, arr2) => {
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

const flatten = array => {
  const output = []
  for (let el of array) {
    if (Array.isArray(el)) {
      for (let number of el) {
        output.push(number)
      }
    } else {
      output.push(el)
    }
  }
  return output
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))

module.exports = flatten