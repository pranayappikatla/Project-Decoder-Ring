// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const defaultAlpha = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    //error handling
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    const alphaCheck = alphabet.split("");
    const result = alphaCheck.some((v, i, a) => {
      return a.lastIndexOf(v) !== i;
    });
    if (result) {
      return false;
    }
    const splitAlpha = alphabet.split("");
    const splitInput = input.split("");
    const finalString = [];

    if (encode) {
      splitInput.forEach((letter) => {
        for (let i = 0; i < defaultAlpha.length; i++) {
          if (defaultAlpha[i] === letter) {
            finalString.push(splitAlpha[i]);
          }
        }
        if (letter === " ") {
          finalString.push(" ");
        }
      });
      return finalString.join("");
    }

    if (!encode) {
      splitInput.forEach((letter) => {
        for (let i = 0; i < splitAlpha.length; i++) {
          if (splitAlpha[i] === letter) {
            finalString.push(defaultAlpha[i]);
          }
        }
        if (letter === " ") {
          finalString.push(" ");
        }
      });
      return finalString.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
