const assertEqual = (actual, expected) => {
  console.log(actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = words => words.slice(1);

module.exports = tail;