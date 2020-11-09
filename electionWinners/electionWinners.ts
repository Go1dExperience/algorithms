// TODO: This is incorrect!!!
function electionsWinners(votes: number[], k: number): number {
    let inTheRun = 0;
    const mostVote = Math.max(...votes);
    const sortedVote = votes.sort((a, b) => b - a);

    if (sortedVote[0] > sortedVote[1] && k === 0) return 1;
    votes.forEach(voteCount => {
        if (voteCount + k > mostVote) inTheRun++;
    });
    return inTheRun;
}

console.log(electionsWinners([4, 3, 5, 4], 3));
