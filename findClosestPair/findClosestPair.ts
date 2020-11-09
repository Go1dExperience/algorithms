function findClosestPair(numbers: number[], sum: number): number {
    let result: number[] = [];
    numbers.forEach((num, index) => {
        for (let i = 0; i < numbers.length; i++) {
            if (num + numbers[i] === sum && index !== i)
                result.push(Math.abs(index - i));
        }
    });
    if (result.length === 0) return -1;
    return Math.min(...result);
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
