function absoluteValuesSumMinimization(a: number[]): number {
  // return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
  return a[Math.ceil(a.length / 2) - 1];
}
// function absoluteValuesSumMinimization(ints) {
//   const vals = [];

//   ints.forEach(int => {
//     const sum = ints.reduce((accum, next) => {
//       return accum + Math.abs(next  - int);
//     }, 0);

//     vals.push(sum);
//   });

//   console.log(vals);
//   const lowest = Math.min(...vals);
//   return ints[vals.indexOf(lowest)];
// }

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 6, 6, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
// console.log('New String')
