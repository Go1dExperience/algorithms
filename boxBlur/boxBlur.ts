function boxBlur(image: number[][]): number[][] {
    const totalLength = image.reduce((acc, arr) => (acc += arr.length), 0);
    const totalValue = image.reduce(
        (acc, arr) => (acc += arr.reduce((num, acc) => (acc += num), 0)),
        0
    );
    const result = Math.floor(totalValue / totalLength);
    return [[result]];
}

console.log(
    boxBlur([
        [2, 1, 4],
        [7, 7, 1],
        [6, 8, 8],
    ])
);
