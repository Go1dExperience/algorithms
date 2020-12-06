function sortByHeight(a: number[]): number[] {
    const sortedHuman = a.filter(ele => ele !== -1).sort((a, b) => a - b);
    let indexVal = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = sortedHuman[indexVal];
            indexVal++;
        }
    }
    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
