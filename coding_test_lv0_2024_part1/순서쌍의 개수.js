// 시간 복잡도: O(n)
// function solution(n) {
//   //   const arr = [];
//   const count = 0;
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 0) {
//       //   arr.push(i);
//       count++;
//     }
//   }
//   //   return arr.length;
//   return count;
// }

// 시간 복잡도: O(sqrt(n))
function solution(n) {
  let ans = 0;
  const sqrtN = Math.sqrt(n); // Math.sqrt(n)을 두 번 계산하도록 하지 않게 const로 넣어두자.
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      if (i === sqrtN) {
        ans += 1; // n이 완전제곱근인 경우.
      } else {
        ans += 2; // i * n/i = n
      }
    }
  }
  return ans;
}

// 반복문 내부에서 제곱근인 경우를 별도로 처리하는 방법. (i <= Math.sqrt(n)) -> 채택.
// 반복문 후 제곱근 여부를 검사하는 방법. (i < Math.sqrt(n)), if (Number.isInteger(Math.sqrt(n)))

// 시간 복잡도: O(n)
function solution(n) {
  return Array(n)
    .fill(1) // 길이가 n인 배열을 생성하고, 모든 요소를 1로 채운다.
    .map((v, i) => v + i)
    .filter((v) => n % v === 0).length; // n의 약수인 경우만 필터! 그러므로 n % v ? ~~ 이렇게 적을 필요가 없음. 말그대로 filter!
}
// n이 큰 경우 배열 생성과 여러 번의 순회가 비효율적.
