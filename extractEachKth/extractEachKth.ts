function extractEachKth(inputArray: number[], k: number): number[] {
    // let clone = [...inputArray];
    // let count = 0;
    // inputArray.forEach((input, index) => {
    //     if ((index + 1) % k === 0) {
    //         clone.splice(index - count, 1);
    //         count++;
    //     }
    // });
    // return clone;
    return inputArray.filter((item, index) => (index + 1) % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
