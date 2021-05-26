// Write your tests here!
const expect = require("chai").expect;
const mod = require("../src/polybius");

describe("polybius", () => {
  it("should translate letters i and j to 42 when encoding", () => {
    const expectedvalue = "421142";
    const actualValue = mod.polybius("iaj");
    expect(expectedvalue).to.equal(actualValue);
  });
  it("should translate 42 to (i/j) when decoding", () => {
    const expectedValue = "(i/j)a(i/j)";
    const actualValue = mod.polybius("421142", false);
    expect(expectedValue).to.equal(actualValue);
  });
  it("should ignore capital letters", () => {
    const expectedValue = "112131";
    const actualValue = mod.polybius("ABC", true);
    expect(expectedValue).to.equal(actualValue);
  });
  it("should maintain spaces", () => {
    const expectedValue = "42 42";
    const actualValue = mod.polybius("i j");
    expect(expectedValue).to.equal(actualValue);
  });
});
