const recursiveEqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        if (!recursiveEqArrays(arr1[i], arr2[i])) {
          return false
        }
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    } return true;
  }
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(recursiveEqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(recursiveEqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(recursiveEqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

module.exports = recursiveEqArrays