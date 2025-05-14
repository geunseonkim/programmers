// [programmers - 특이한 정렬](https://school.programmers.co.kr/learn/courses/30/lessons/120880?language=javascript)

// Solution
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const diff1 = Math.abs(a - n);
    const diff2 = Math.abs(b - n);

    if (diff1 === diff2) return b - a;
    return diff1 - diff2;
  });
}

/* Review
sort로 정렬.
숫자 간의 차이가 없이 똑같으면 절댓값으로 비교 -> b - a 둘 중 큰 수부터 정렬.
  */

// more simple solution
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
