// [programmers - 캐릭터의 좌표](https://school.programmers.co.kr/learn/courses/30/lessons/120861?language=javascript)

// Solution
function solution(keyinput, board) {
  let keyResult = [0, 0];
  const maxX = Math.floor(board[0] / 2);
  const maxY = Math.floor(board[1] / 2);

  keyinput.forEach((key) => {
    if (key === "left" && keyResult[0] > -maxX) keyResult[0] -= 1;
    else if (key === "right" && keyResult[0] < maxX) keyResult[0] += 1;
    else if (key === "up" && keyResult[1] < maxY) keyResult[1] += 1;
    else if (key === "down" && keyResult[1] > -maxY) keyResult[1] -= 1;
  });

  return keyResult;
}

/* Review

Using forEach to loop through key inputs, and using switch can improve readability    */

// incorrect way
function solution(keyinput, board) {
  let keyResult = [0, 0];
  keyinput.map((key) => {
    if (key === "down") return (keyResult[1] = board[1] - 1);
    if (key === "up") return (keyResult[1] = board[1] + 1);
    if (key === "left") return (keyResult[0] = board[0] - 1);
    if (key === "right") return (keyResult[0] = board[0] + 1);
  });
  return keyResult;
}

// other correct way; used switch
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}
