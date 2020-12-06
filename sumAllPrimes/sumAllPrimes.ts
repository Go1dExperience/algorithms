function sumAllPrimes(num: number): number {
    let totalPrimes = 0;

    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === j) {
                totalPrimes += i;
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    return totalPrimes;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
