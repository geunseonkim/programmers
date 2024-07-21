// // 소인수분해: 어떤 수를 소수들의 곱으로 표현하는 것. (ex: 12를 소인수분해하면 소인수는 2, 3)
// // 주어진 수의 소인수를 구하는 함수 === 주어진 수의 약수이면서 소수인 경우를 배열로 반환하는 함수.
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

// // 주어진 수까지의 소수를 배열로 반환하는 함수.
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

// // 주어진 수의 약수를 배열로 반환하는 함수.
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
