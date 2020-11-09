function largestNumber(n: number): number {
    let result = "";
    while (result.length < n) {
        result = result.concat("9");
    }
    return parseInt(result);
}

console.log(largestNumber(2));
console.log(largestNumber(3));
