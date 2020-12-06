function lateRide(n: number): number {
    let hour = Math.floor(n / 60);
    let minute = n % 60;
    let hourSum = calculateSum(hour);
    let minuteSum = calculateSum(minute);
    return hourSum + minuteSum;
}

function calculateSum(n: number): number {
    return n
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

console.log(lateRide(240));
console.log(lateRide(808));
