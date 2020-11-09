function factorializeANumber(num: number): number {
    if (num < 0) return 0;
    let result = 1;
    if (num === 0) return 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(1));
console.log(factorializeANumber(10));
