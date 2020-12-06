function makeArrayConsecutive2(statues: number[]): number {
    let count = 0;
    let sortedStatues = statues.sort((a, b) => a - b);

    sortedStatues.forEach((statue, index) => {
        while (statues[index + 1] && statue < statues[index + 1] - 1) {
            statue++;
            count++;
        }
    });
    return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([7, 2, 5, 9]));
