function squareDigitsSequence(a0: number): number {
    let result: number[] = [a0];
    function square(a: number) {
        let sqareSum = a
            .toString()
            .split("")
            .reduce((a: number, b) => a + Math.pow(parseInt(b), 2), 0);
        if (result.includes(sqareSum)) {
            result.push(sqareSum);
            return;
        } else {
            result.push(sqareSum);
            square(sqareSum);
        }
    }
    square(a0);
    return result.length;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
