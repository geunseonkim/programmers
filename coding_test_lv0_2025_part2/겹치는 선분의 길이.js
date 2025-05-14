// [programmers - 겹치는 선분의 길이](https://school.programmers.co.kr/learn/courses/30/lessons/120876?language=javascript)

// Solution
function solution(lines) {
  // 좌표 범위: -100 ~ 100 -> 총 201개의 공간 만들고 초기화.
  let arr = new Array(201).fill(0);

  // 각 선분의 구간을 arr에 표시.
  for (let [start, end] of lines) {
    for (let i = start; i < end; i++) {
      arr[i + 100] += 1; // -100~100 => 0~200 인덱스로 맞춤.
    }
  }

  let count = 0;
  for (let n of arr) {
    if (n >= 2) count++;
  }

  return count;
}

/* Idea

배열을 사용해서 겹치는 구간 표시.
2개 이상 선분이 겹친 부분 찾음.  
   */

//other way
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
