const assertArraysEqual = require('./assertArraysEqual')

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

assertArraysEqual(map([2,1,3], num => num), [4,2,6])
assertArraysEqual(map([2,1,3], num => num * 2), [4,2,6])

module.exports = map