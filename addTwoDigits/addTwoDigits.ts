// function addTwoDigits(n: any): number {

// }
const addTwoDigits = (n: number): number => {
  const digits = n.toString().split("").map(Number);
  return digits.reduce((a, b) => a + b, 0);
};

console.log(addTwoDigits(299));
