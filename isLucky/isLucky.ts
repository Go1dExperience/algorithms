function getTotal(str: string) {
    return [...str].reduce((acc, num) => acc + parseInt(num), 0);
}
function isLucky(n: number): boolean {
    const input = n.toString();
    const firstHalf = input.slice(0, input.length / 2);
    const secondHalf = input.slice(input.length / 2);
    const firstSum = getTotal(firstHalf);
    const secondSum = getTotal(secondHalf);
    return firstSum === secondSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
