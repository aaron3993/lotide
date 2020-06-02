const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] for ('hello').e", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });
});