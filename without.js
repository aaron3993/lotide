const assertArraysEqual = require('./assertArraysEqual')

const without = (source, itemsToRemove) => {
  const output = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      output.push(source[i]);
    }
  }
  console.log(output);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without