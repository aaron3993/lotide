const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for cd and dc", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("returns true for cd and cd2", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };