function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let max = 0,
        sum = 0;

    for (let i = 0; i < k; i++) {
        sum += inputArray[i];
    }
    max = sum;

    for (let i = k; i < inputArray.length; i++) {
        sum = sum - inputArray[i - k] + inputArray[i];
        if (sum > max) max = sum;
    }
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
