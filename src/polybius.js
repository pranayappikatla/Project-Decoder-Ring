const polybiusModule = (function () {
  const mainSquare = [["a", "11"],["b", "21"],["c", "31"],["d", "41"],["e", "51"],
    ["f", "12"],["g", "22"],["h", "32"],["i", "42"],["j", "42"],["k", "52"],
    ["l", "13"],["m", "23"],["n", "33"],["o", "43"],["p", "53"],["q", "14"],
    ["r", "24"],["s", "34"],["t", "44"],["u", "54"],["v", "15"],["w", "25"],
    ["x", "35"],["y", "45"],["z", "55"]
  ];

  function polybius(input, encode = true) {
    // if encode, it takes in the right inputs from "mainSquare" or vise versa
    const flip = encode ? [0, 1] : [1, 0];
    // if decode, makes all the spaces double spaces so its easier to check convert values later
    if (!encode) {
      input = input.split("").reduce((acc, char) => {
          char === " " ? acc.push("  ") : acc.push(char);
          return acc;
        }, []).join("");
    }
    // error handling: if decoding and length is odd returns false because there cannot be an odd number of digits
    if(!encode && input.length%2 != 0 ){
      return false
    }
    // array we reduce through will be split by each character for encoding and split by every other character for decoding
    const decArray = encode ? input.toLowerCase().split("") : input.match(/.{1,2}/g);
    // returns the array as a joined string with changed values
    return decArray.reduce((acc, char) => {
        // if the character in question is a single or double space, push a single space to accumulator
        if(char === "  " || char == " "){
          acc.push(" ")
          return acc
        // dealing with i and j special case
        }else if(!encode && char === "42"){
          acc.push("(i/j)")
          return acc
        }
        // finds the array pair in mainSquare and depending on decode or encode, pushes either the first or second index 
        const key = mainSquare.find((pair) => char === pair[flip[0]]);
        acc.push(key[flip[1]])
        return acc
      }, []).join("");
  }
  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };


// OLD VERSION BELOW

/* Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const mainSquare = [
    ["a", "11"],
    ["b", "21"],
    ["c", "31"],
    ["d", "41"],
    ["e", "51"],
    ["f", "12"],
    ["g", "22"],
    ["h", "32"],
    ["i", "42"],
    ["j", "42"],
    ["k", "52"],
    ["l", "13"],
    ["m", "23"],
    ["n", "33"],
    ["o", "43"],
    ["p", "53"],
    ["q", "14"],
    ["r", "24"],
    ["s", "34"],
    ["t", "44"],
    ["u", "54"],
    ["v", "15"],
    ["w", "25"],
    ["x", "35"],
    ["y", "45"],
    ["z", "55"],
  ];

  function polybius(input, encode = true) {
    const message = [];
    if (encode) {
      splitString = input.split("");
      splitString.forEach((letter) => {
        const foundPair = mainSquare.find((pair) => pair[0] === letter);
        foundPair === undefined
          ? message.push(" ")
          : message.push(foundPair[1]);
      });
      return message.join("");
    }
    if (!encode) {
      const message = [];
      splitString = input.split("");
      for (let number in splitString) {
        splitString[number] === " " ? (splitString[number] = "  ") : null;
      }
      let joined = splitString.join("");
      if (joined.length % 2 != 0) {
        return false;
      }
      const finalArray = joined.match(/.{1,2}/g);
      console.log(finalArray);
      finalArray.forEach((number) => {
        const foundPair = mainSquare.find((pair) => pair[1] === number);
        if (foundPair === undefined) {
          message.push(" ");
        } else if (foundPair[1] === "42") {
          message.push("(i/j)");
        } else {
          message.push(foundPair[0]);
        }
      });
      return message.join("");
    }
  }

  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
*/
