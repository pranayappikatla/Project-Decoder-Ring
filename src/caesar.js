// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    let inputSplit = input.split("");
    for (let i = 0; i < inputSplit.length; i++) {
      let character = inputSplit[i];
      let validChar = false;
      let characterCode = input.toLowerCase().charCodeAt(i);
      if ((characterCode < 123) & (characterCode > 96)) {
        encode ? (characterCode += shift) : (characterCode -= shift);
        validChar = true;
        character = String.fromCharCode(characterCode);
      }
      if ((characterCode > 122) & validChar) {
        const oldCharCode = characterCode;
        characterCode = 96 + (oldCharCode - 122);
        character = String.fromCharCode(characterCode);
      }
      if ((characterCode < 97) & validChar) {
        const oldCharCode = characterCode;
        characterCode = 123 - (97 - oldCharCode);
        character = String.fromCharCode(characterCode);
      }
      console.log(character);
      inputSplit[i] = character;
    }
    return inputSplit.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
