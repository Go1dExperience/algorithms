function crossingSum(matrix: number[][], a: number, b: number): number {
    let colSumResult = 0;
    const rowSum = matrix[a].reduce((a, b) => a + b, 0);
    matrix.forEach(arr => (colSumResult += arr[b]));
    return colSumResult + rowSum - matrix[a][b];
}

console.log(
    crossingSum(
        [
            [1, 1, 1, 1],
            [2, 2, 2, 2],
            [3, 3, 3, 3],
        ],
        1,
        3
    )
);
