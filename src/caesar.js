const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //  if input is missing, shift is missing, or the shift is greater than or less than 25 and -25 respectively, return false
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const reg = /[A-Za-z]/;
    // returns new string with changed values
    return input.split("")
      .reduce((acc, char, index) => {;
        // tests the character with regular expression, if its not a letter then it just pushes the character and returns accumulator
        if (!reg.test(char)) {
          acc.push(char);
          return acc;
        }
        // grab unicode of character
        let charCode = input.toLowerCase().charCodeAt(index);
        // if encoding we add the shift, if decoding we subtract the shift
        encode ? (charCode += shift) : (charCode -= shift);
        // if it shifted outside of the alpha, wrap it around to the other end
        charCode > 122 ? charCode-=26: charCode < 97 ? charCode +=26: 0
        acc.push(String.fromCharCode(charCode));
        return acc;
      }, [])
      .join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
