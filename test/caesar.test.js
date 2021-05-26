// Write your tests here!
const expect = require("chai").expect;
const mod = require("../src/caesar");

describe("caesar", () => {
  it("should return false if 'shift' value is equal to 0, less than -25, or greater than 25, or not present.", () => {
    const expectedValue = false;
    const actualValue1 = mod.caesar("hello", 0, true);
    const actualValue2 = mod.caesar("hello", -26, true);
    const actualValue3 = mod.caesar("hello");
    const actualValue4 = mod.caesar("hello", 26, true);
    expect(expectedValue)
      .to.equal(actualValue1)
      .to.equal(actualValue2)
      .to.equal(actualValue3)
      .to.equal(actualValue4);
  });
  it("should ignore capital letters", () => {
    const expectedValue = "skzxuvuroy";
    const actualValue1 = mod.caesar("metropolis", 6);
    const actualValue2 = mod.caesar("MeTrOpOlIs", 6);
    expect(expectedValue).to.equal(actualValue1).to.equal(actualValue2);
  });
  it("should handle shifts the go past the end of the alphabet", () => {
    const expectedValue = "aaaa";
    const actualValue = mod.caesar("zzzz", 1);
    expect(expectedValue).to.equal(actualValue);
    const expectedValue2 = "zzzz";
    const actualValue2 = mod.caesar("aaaa", -1);
    expect(expectedValue2).to.equal(actualValue2);
  });
  it("should keep spaces and nonalphabetic symbols", () => {
    const expectedValue = "cde !@#$";
    const actualValue = mod.caesar("abc !@#$", 2);
    expect(expectedValue).to.equal(actualValue);
  });
});
