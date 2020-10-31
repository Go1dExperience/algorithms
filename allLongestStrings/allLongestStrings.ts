// function allLongestStrings(inputArray: string[]): string[] {

// }
const result = [];
let lengthOfString = 0;
const allLongestStrings = (inputArray: string[]): string[] => {
  for (let i = 0; i < inputArray.length; i++) {
    lengthOfString =
      inputArray[i].length > lengthOfString
        ? inputArray[i].length
        : lengthOfString;
  }
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === lengthOfString) {
      result.push(inputArray[j]);
    }
  }
  return result;
};
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
