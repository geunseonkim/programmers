function solution(n) {
  // (1) 성능. 시간 복잡도: O(n)
  //   let count = 0;
  //   for (let i = 1; i <= n; i++) {
  //     if (i % 2 === 0) {
  //       count += i;
  //     }
  //   }
  //   return count;

  // (2) 가독성, 유연성(유지보수).
  // let arr = []
  // let count = 0
  //     for (let i = 1; i <= n; i++) {
  //         arr.push(i)
  //     }
  // console.log(arr)
  // for (let a of arr) {
  //     if (a % 2 === 0) {
  //         count += a
  //     }
  // }
  // return count

  // (3) 더 나은 방식. 시간 복잡도: O(n/2)
  let answer = 0;
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}

// 홀수의 합일 경우.
function solution(n) {
  //   let answer = 1; // answer = 1
  //   for (let i = 1; i <= n; i += 2) {// so, 기존 1 + 1 + 3 + ...
  //     answer += i;
  //   }
  //   return answer;
  //   (x)

  let answer = 0; // answer = 0
  for (let i = 1; i <= n; i += 2) {
    // so, 기존 0 + 1 + 3 + ...
    answer += i;
  }
  return answer;
  //   (o)
}

// 홀수 수열의 합 공식 사용. 시간 복잡도: O(1)
function solution(n) {
  return n * n;
}

// S = 1 + 3 + 5 ... + 2n-1
// 수학적 귀납법을 통한 증명 후, S = n * n

// 짝수 수열의 합 공식 사용. 시간 복잡도: O(n)
function solution(n) {
  k = Math.floor(n / 2);
  return k * (k + 1);
}

// 가우스 합 공식
// 1 + 2 + 3 + ... + n = n * ( n + 1 ) /2
// 2 + 4 + 6 + ... + 2n = n * (n + 1)
