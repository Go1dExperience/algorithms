// function adjacentElementsProduct(inputArray: number[]): number {

// }
let result = 0;
const adjacentElementsProduct = ([
  first,
  second,
  ...rest
]: number[]): number => {
  // let result = 0;
  // for(let i=0; i<inputArray.length;i++) {
  //     result = inputArray[i]*inputArray[i+1] > result ? inputArray[i]*inputArray[i+1] : result
  // }
  // return result
  //   const [first, second, ...rest] = inputArray;
  if (!second) return result;
  result = first * second > result ? first * second : result;
  adjacentElementsProduct([second, ...rest]);
  return result;
};
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
