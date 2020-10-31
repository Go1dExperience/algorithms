// function add(param1: number, param2: number): number {

// }
const add = (param1: number, param2: number): number => param1 + param2;
// function add2(param1: number[]): number {

// }
const add2 = (...params: number[]): number => params.reduce((a, b) => a + b, 0);
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
