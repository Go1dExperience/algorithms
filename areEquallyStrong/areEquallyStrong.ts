function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  let yours = yourLeft + yourRight;
  let friends = friendsLeft + friendsRight;
  if (yours !== friends) return false;
  if (yourLeft === friendsLeft || yourLeft === friendsRight) return true;
  return false;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
console.log(areEquallyStrong(5, 10, 9, 6));
console.log(areEquallyStrong(15, 15, 15, 15));
