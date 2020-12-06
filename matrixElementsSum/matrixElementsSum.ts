function matrixElementsSum(matrix: any[][]): number {
    let price = 0;
    matrix.forEach((floor, floorIndex) => {
        floor.forEach((room, roomNumber) => {
            if (!floorIndex) price += room;
            else {
                if (room && matrix[floorIndex - 1][roomNumber] !== 0)
                    price += room;
            }
        });
    });
    return price;
}

console.log(
    matrixElementsSum([
        [0, 1, 1, 2],
        [0, 5, 0, 0],
        [2, 0, 3, 3],
    ])
);
