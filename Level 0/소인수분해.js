// 약수면서 소수인 것만 찾기.
// 주어진 수의 약수이면서 소수인 경우를 배열로 반환하는 함수.

// function solution(n) {
//   // 소수 검사.
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   // 약수면서 소수인 것.
//   let result = [];
//   for (let i = 2; i <= n; i++) {
//     if (n % i === 0 && isPrime(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// 소인수분해로 모든 소인수 찾기. -> 소인수분해: 어떤 수를 소수들의 곱으로 표현하는 것. (ex: 12를 소인수분해하면 소인수는 2, 3)

// (1)
// function solution(n) {
//   let answer = [];

//   let i = 2;
//   while (i <= n) {
//     if (n % i === 0) {
//       answer.push(i);
//       n = n / i; // 소인수 i를 여러 번 나누었고, i가 더 이상 n의 소인수가 아니면 다음 소인수로 넘어가게끔 함. so 소인수들이 중복돼도 정확한 소인수 리스트를 생성할 수 있도록 해준다.
//     } else {
//       i++;
//     }
//   }
//   return [...new Set(answer)];
// }

// (2)
function solution(n) {
  let answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.push(i);
      n = n / i;
    }
  }
  return [...new Set(answer)];
}

// cf.
// 주어진 수까지의 소수를 배열로 반환하는 함수.
// function findPrimes(n) {
//   const isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   let primes = [];
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       primes.push(i);
//     }
//   }
//   return primes;
// }
// console.log(findPrimes(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// 주어진 수의 약수를 배열로 반환하는 함수.
// function findDivisors(n) {
//   let divisors = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       divisors.push(i);
//     }
//   }
//   return divisors;
// }
// console.log(findDivisors(30)); // [1, 2, 3, 5, 6, 10, 15, 30]
