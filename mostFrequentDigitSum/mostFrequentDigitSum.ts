function mostFrequentDigitSum(n: number): number {
    if (n < 10) return n;
    else if (n < 18) return 9;
    else if (n === 19) return 10;
    else return 9;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
console.log(mostFrequentDigitSum(19));
console.log(mostFrequentDigitSum(29));
