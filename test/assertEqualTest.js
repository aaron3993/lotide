const assert = require('chai').assert;
const assertEqual = require('../assertEqual')

describe("#assertEqual", () => {
  it("returns 'Lighthouse Labs' for 'Lighthouse Labs'", () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Lighthouse Labs'));
  });
  it("returns 1 for (1, 1)", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });
});