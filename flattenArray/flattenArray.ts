function flattenArray(arr: any[]): any[] {
  const [first, ...rest] = arr;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
