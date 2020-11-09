function firstDuplicate(a: number[]): number {
    let occurenceObj = {};
    for (let num of a) {
        if (occurenceObj.hasOwnProperty(num)) return num;
        occurenceObj[num] = num;
    }
    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
