function digitDegree(n: number): number {
    let count = 0;
    if (n <= 9) return count;
    let result = [...n.toString()].reduce((a, b) => a + parseInt(b), 0);
    count++;
    while (result > 9) {
        result = [...result.toString()].reduce((a, b) => a + parseInt(b), 0);
        count++;
    }
    return count;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
