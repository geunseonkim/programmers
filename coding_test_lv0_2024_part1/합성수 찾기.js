// (1)
function solution(n) {
  let answer = 0;
  for (let i = 4; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      // 제곱근까지만 반복. (j <= Math.sqrt(i) or  j * j <= i)
      if (i % j === 0) {
        count++;
        if (j * j !== i) count++;
      }
      if (count >= 3) {
        answer++;
        break;
      }
    }
  }
  return answer;
}

// (2)
// function solution(n) {
//   let count = 0;
//   for (let i = 4; i <= n; i++) {
//     // 4부터 n까지 반복 (4는 첫 번째 합성수)
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         count++;
//         break;
//       }
//     }
//   }
//   return count;
// }
// break는 i가 j의 배수이므로, i는 적어도 두 개의 약수를 갖고 있다는 것을 보장.
// but 정확한 약수를 세는 건 부족함. only 합성수.

// 제곱근까지만 확인했기 때문에 i는 최소한 두 개의 약수를 가지고 있으며, 이 경우 합성수인지 여부를 판단할 수 있다.
