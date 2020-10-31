function arrayConversion(inputArray: number[]): number {
    let isOdd = false;
    let accArr: number[] = [];

    while (inputArray.length !== 1) {
        for (let i = 0; i < inputArray.length - 1; i++) {
            if (!isOdd) {
                accArr.push(inputArray[i] + inputArray[i + 1]);
            } else {
                accArr.push(inputArray[i] * inputArray[i + 1]);
            }
            i++;
        }
        inputArray = [...accArr];
        accArr = [];
        isOdd = !isOdd;
    }
    return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 2, 3, 4]));
console.log(arrayConversion([1, 2]));

// console.log(addOrMultiply([1, 2, 3, 4, 5, 6, 7, 8], 1));
