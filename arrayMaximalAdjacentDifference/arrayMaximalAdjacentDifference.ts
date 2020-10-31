function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    const diffArray: number[] = [];

    for (let i = 0; i < inputArray.length - 1; i++) {
        diffArray.push(Math.abs(inputArray[i] - inputArray[i + 1]));
    }

    return Math.max(...diffArray);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 4, 5, 3]));
