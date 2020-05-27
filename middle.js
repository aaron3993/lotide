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

const middle = arr => {
  const output = []
  if (arr.length <= 2) {
    output
  } else if (arr.length % 2 === 0) {
    output.push(arr[arr.length / 2 - 1], arr[arr.length / 2])
  } else {
    output.push(arr[(arr.length - 1)/ 2])
  }
  console.log(output)
}