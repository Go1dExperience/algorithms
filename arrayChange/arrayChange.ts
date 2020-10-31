function arrayChange(inputArray: number[]): number {
    let count = 0;
    var arrTap = [];
    var max = 0;

    for (let i = 0; i < inputArray.length; i++) {
        arrTap.push(inputArray[i] - i);
    }
    max = Math.max(...arrTap);
    arrTap.forEach(item => (count += max - item));
    return count;
}
//TODO The most difficult
console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 2, 4]));
console.log(arrayChange([1, 3, 4]));
