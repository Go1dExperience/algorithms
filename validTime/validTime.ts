function validTime(time: string): boolean {
    let hourAndMinute = time.split(":");
    return parseInt(hourAndMinute[0]) < 24 && parseInt(hourAndMinute[1]) < 59;
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));
