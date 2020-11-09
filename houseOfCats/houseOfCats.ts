function houseOfCats(legs: number): number[] {
    let result: number[] = [];
    if (legs % 2 !== 0) legs -= 1;
    for (let i = 1; i < legs / 2 + 1; i++) {
        if ((legs - i * 2) % 4 === 0 || legs - i * 2 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(houseOfCats(6));
console.log(houseOfCats(11));
console.log(houseOfCats(2));
console.log(houseOfCats(4));
