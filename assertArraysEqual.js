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