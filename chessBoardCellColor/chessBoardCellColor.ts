function chessBoardCellColor(cell1: string, cell2: string): boolean {
    let board = {};
    "abcdefgh".split("").forEach((char, index) => (board[char] = index + 1));
    const cell1X = board[cell1[0].toLowerCase()];
    const cell1Y = parseInt(cell1[1]);
    const cell2X = board[cell2[0].toLowerCase()];
    const cell2Y = parseInt(cell2[1]);

    if (
        ((cell1X + cell1Y) % 2 === 0 && (cell2X + cell2Y) % 2 !== 0) ||
        ((cell2Y + cell2X) % 2 === 0 && (cell1X + cell1Y) % 2 !== 0)
    )
        return false;
    return true;
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));
