function centuryFromYear(year: number): number {
    const lastTwoYear = year % 100;
    return lastTwoYear === 0 ? year / 100 : Math.ceil(year / 100);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1699));
console.log(centuryFromYear(85));
