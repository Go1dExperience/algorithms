function bishopAndPawn(bishop: string, pawn: string): boolean {
    let board = {};
    "abcdefgh".split("").forEach((char, index) => (board[char] = index + 1));
    console.log(board);

    const bishopX = board[bishop[0]];
    const bishopY = parseInt(bishop[1]);
    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1]);
    if (
        bishopX + bishopY === pawnX + pawnY ||
        bishopX + pawnY === bishopY + pawnX
    )
        return true;

    return false;
}

console.log(bishopAndPawn("a1", "e3"));
