// Please refrain from tampering with the setup code provided here,
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
