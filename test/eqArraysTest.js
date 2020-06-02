const eqArrays = require('../eqArrays')
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [1, 2], [1, 2]", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2]), true);
  });
  it("returns false for [1, 2], [1, 3]", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 3]), false); 
  });
});