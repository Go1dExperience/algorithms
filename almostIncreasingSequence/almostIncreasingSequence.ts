function almostIncreasingSequence(sequence: number[]): boolean {
  let syncCount: number = 0;
  for (let i = 0; i < sequence.length; i++) {
    // if(sequence[i] <= sequence[i-1]) {
    //     syncCount++;
    //     if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
    //     return false;
    // }
    // }
    if (sequence[i] <= sequence[i + 1]) {
      continue;
    }
    if (sequence[i] >= sequence[i + 1]) {
      syncCount++;
    }
  }
  return syncCount <= 1;
}
console.log(almostIncreasingSequence([1, 3, 1, 4]));
console.log(almostIncreasingSequence([2, 5, 3, 4, 6]));
