const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) ?
    `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` :
    `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  )
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) return false;
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

assertObjectsEqual({'a': 'g'}, {'a': 'b'})
assertObjectsEqual({'a': ['g', 'g']}, {'a': ['g', 'g']})

module.exports = assertObjectsEqual