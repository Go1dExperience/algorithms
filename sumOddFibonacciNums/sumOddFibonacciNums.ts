function sumOddFibonacciNums(num: number): number {
    let result = 0,
        current = 0,
        previous = 0;
    while (current <= num) {
        if (current % 2 !== 0) result += current;
        previous = current;
        current = current + previous;
    }
    return result;
}

console.log(sumOddFibonacciNums(1000));
// console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
