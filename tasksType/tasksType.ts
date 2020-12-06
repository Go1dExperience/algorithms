function tasksTypes(deadlines: number[], day: number): number[] {
    let today = 0,
        upcoming = 0,
        later = 0;
    deadlines.forEach(date => {
        if (date <= day) today++;
        else if (date <= day + 7) upcoming++;
        else later++;
    });
    return [today, upcoming, later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
