// [programmers - 안전지대](https://school.programmers.co.kr/learn/courses/30/lessons/120866?language=javascript)

// Solution
function solution(board) {
  const n = board.length;
  const danger = Array.from(Array(n), () => Array(n).fill(0));

  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        danger[i][j] = 1; // 지뢰 자신.
        for (let d = 0; d < 8; d++) {
          const ni = i + dx[d];
          const nj = j + dy[d];
          if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
            danger[ni][nj] = 1;
          }
        }
      }
    }
  }

  let safeCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (danger[i][j] === 0) safeCount++;
    }
  }

  return safeCount;
}

/* Review
challenging problem.
should review the 2D array boundary logic again.
 */

//another way
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}
