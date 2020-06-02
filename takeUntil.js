const assertArraysEqual = require('./assertArraysEqual')

const takeUntil = (array, callback) => {
  const output = []
  for (let item of array) {
    if (!callback(item)) {
      output.push(item)
    } else {
      return output
    }
  }
  return output
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 5, 2]);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil