function incrementalBackups(
    lastBackupTime: number,
    changes: number[][]
): number[] {
    const result: number[] = [];
    changes.forEach(change => {
        if (change[0] > lastBackupTime && !result.includes(change[1])) {
            result.push(change[1]);
        }
    });
    return result.sort((a, b) => a - b);
}

console.log(
    incrementalBackups(461620205, [
        [461620203, 1],
        [461620204, 2],
        [461620205, 6],
        [461620206, 5],
        [461620207, 3],
        [461620207, 5],
        [461620208, 1],
    ])
);
