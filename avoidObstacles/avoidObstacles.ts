function avoidObstacles(inputArray: number[]): number {
    inputArray = inputArray.sort((a, b) => a - b);
    const largestInputValue = inputArray[inputArray.length - 1];

    for (let i = 1; i <= largestInputValue + 1; i++) {
        if (inputArray.every(elm => elm % i !== 0)) return i;
    }
}

console.log(avoidObstacles([5, 3, 5, 7, 9]));
