function houseNumbersSum(inputArray: number[]): number {
    let result = 0;
    inputArray.some(el => {
        if (!el) {
            return true;
        }
        result += el;
    });
    return result;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
