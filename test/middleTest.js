const middle = require('../middle')
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns [5] for [4,5,6]", () => {
    assert.deepEqual(middle([4,5,6]), [5]);
  });
  it("returns [6, 6] for [4,6,6,6,6,6,6,6]", () => {
    assert.deepEqual(middle([4,6,6,6,6,6,6,6]), [6, 6]);
  });
});