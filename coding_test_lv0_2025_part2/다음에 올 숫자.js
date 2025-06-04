// [programmers - 다음에 올 숫자](https://school.programmers.co.kr/learn/courses/30/lessons/120924?language=javascript)

// Solution
function solution(common) {
  const gap10 = common[1] - common[0];
  const gap21 = common[2] - common[1];
  if (gap10 === gap21) {
    const diffA = common[1] - common[0];
    return common[common.length - 1] + diffA;
  } else {
    const diffG = common[1] / common[0];
    return common[common.length - 1] * diffG;
  }
}

/* Review
common[common.length - 1]  === common.pop()
pop() // 배열의 마지막 요소를 제거하고 그 제거된 값을 반환하는 함수.
 */

// same logic but made it simple
function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}
