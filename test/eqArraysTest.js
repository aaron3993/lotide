const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
const assert = require('chai').assert;

// assertEqual(eqArrays([1, 2], [1, 2]), true)
// assertEqual(eqArrays([1, 2], [1, 3]), true)

describe("#eqArrays", () => {
  it("returns true for [1, 2], [1, 2]", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2]), true);
  });
  it("returns false for [1, 2], [1, 3]", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 3]), false); 
  });
});