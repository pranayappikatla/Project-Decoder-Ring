const substitutionModule = (function () {
  // default alphabet 
  const defaultA = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, inputA, encode = true) {
    // checks if there is an input alphabet, the input alphabet's length is 26, and that each character in input alphabet is unique
    if (!inputA || inputA.length != 26 || inputA.split("").some((v,i,a) => a.lastIndexOf(v) !== i)) {
      return false;
    }
    // changes which alphabet to use for decoding/encoding based on parameter input
    const encoderArray = encode? [defaultA,inputA.split("")] : [inputA.split(""),defaultA]
    // checks each letter of the input string and returns a strings with all changed values
    return input.toLowerCase().split("").reduce((acc,letter)=>{
      // if the input alphabet doesn't contain the letter, push the letter as is
      if(!inputA.split("").includes(letter)){
        acc.push(letter)
      }else{
      // if it does contain, use the index of where the letter is in the first array to match the letter to the second array.
        acc.push(encoderArray[1][encoderArray[0].indexOf(letter)])
      }
      return acc
    },[]).join("")
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
