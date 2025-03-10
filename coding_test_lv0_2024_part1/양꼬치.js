function solution(n, k) {
  var answer = 0;
  if (n >= 10) {
    let freeK = Math.floor(n / 10);
    k = k - freeK;
  }
  answer = n * 12000 + k * 2000;
  return answer;
}

// function solution(n, k) {
//   k -= ~~(n / 10);
//   if (k === 0) k = 0;
//   return n * 12000 + k * 2000;
// }
