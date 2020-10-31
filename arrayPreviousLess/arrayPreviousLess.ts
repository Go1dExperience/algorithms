function arrayPreviousLess(items: number[]): number[] {
    let lessArray = [];
    lessArray = items.map((elm, i) => {
        while (i--) {
            if (items[i] < elm) return items[i];
        }
        return -1;
    });
    return lessArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
