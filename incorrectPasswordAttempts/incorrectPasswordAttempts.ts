function incorrectPasscodeAttempts(
    passcode: string,
    attempts: string[]
): boolean {
    let count = 0;
    return attempts.some(attempt => {
        if (attempt !== passcode) count++;
        return count === 10;
    });
}

console.log(
    incorrectPasscodeAttempts("1111", [
        "1111",
        "4444",
        "9999",
        "3333",
        "8888",
        "7777",
        "0000",
        "6666",
        "7285",
        "5555",
        "1233",
        "1111",
    ])
);
