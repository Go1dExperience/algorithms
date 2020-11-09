function extractMatrixColumn(matrix: number[][], column: number): number[] {
    let result: number[] = [];
    matrix.forEach(arr => result.push(arr[column]));
    return result;
}

console.log(
    extractMatrixColumn(
        [
            [1, 1, 1, 2],
            [0, 5, 0, 4],
            [2, 1, 3, 6],
        ],
        2
    )
);
