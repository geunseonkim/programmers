// [programmers - 가까운 수](https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript)

// Solution
function solution(array, n) {
  return array.reduce((acc, cur) => {
    const accDiff = Math.abs(acc - n);
    const curDiff = Math.abs(cur - n);

    return accDiff < curDiff || (accDiff === curDiff && acc < cur) ? acc : cur;
  }, array[0]);
}

/*
Review

Read the problem carefully (ex, pick the smaller num if same distance)
Use Reduce to find the smallest diff in one shot
Math.abs() to get absolute differences
*/
