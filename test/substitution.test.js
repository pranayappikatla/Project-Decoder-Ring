// Write your tests here!
const expect = require("chai").expect;
const mod = require("../src/substitution");

describe("substitution", () => {
  it("should return false if alphabet is not 26 characters long", () => {
    const expectedValue = false;
    const actualValue = mod.substitution("chicken", "asldhfjdsah");
    expect(expectedValue).to.equal(actualValue);
  });
  it("should correctly translate phrase based on alphabet given to function", () => {
    const expectedValue = "bcdef";
    const actualValue = mod.substitution("abcde", "bcdefghijklmnopqrstuvwxyza");
    expect(expectedValue).to.equal(actualValue);
  });
  it("should return false if there are any duplicates in given alphabet", () => {
    const expectedValue = false;
    const actualValue = mod.substitution(
      "turtle",
      "bcbcbchijklmnopqrstuvwxbcd"
    );
    expect(expectedValue).to.equal(actualValue);
  });
  it("should maintain spaces in both encoding and decoding", () => {
    const expectedValue = "b c d e f";
    const actualValue = mod.substitution(
      "a b c d e",
      "bcdefghijklmnopqrstuvwxyza"
    );
    expect(expectedValue).to.equal(actualValue);
  });
  it("should ignore capital letters", () => {
    const expectedValue = "bcdef";
    const actualValue = mod.substitution("abcde", "bcdefghijklmnopqrstuvwxyza");
    expect(expectedValue).to.equal(actualValue);
  });
});
