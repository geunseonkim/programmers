function solution(n) {
  let answer = 0;
  let count = 0;

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
      if (count >= 3) {
        answer++;
        count = 0;
        break;
      }
    }
    count = 0;
  }
  return answer;
}

// ?이 코드 되게 깔끔한데?
// but 이 코드는 주어진 수 n 이하에서 소수의 개수를 세는 함수. 하지만 문제의 요구사항은 합성수의 개수.
function solution(n) {
  let count = 0;
  let tar = 3;
  while (tar++ < n) {
    for (let i = 2; i <= Math.sqrt(tar); i++) {
      if (tar % i === 0) {
        count++;
        break;
      }
    }
  }
  return count;
}
