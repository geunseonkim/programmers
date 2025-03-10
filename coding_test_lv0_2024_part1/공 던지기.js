// 배열을 반복 시키려면 numbers = numbers.join("").repeat(999).split("") 이런 게 아니라 모듈로 연산의 적용하기!

// 아이디어: 짝수 인덱스만 사용, 순환 구조(모듈(%)로 연산), k번 째 요소(짝수 인덱스를 따라감).
function solution(numbers, k) {
  const length = numbers.length;
  const index = (2 * (k - 1)) % length; // 2k -> 2(k-1) why? (k - 1)은 0부터 시작하는 인덱스를 맞추기 위한 것.
  return numbers[index];
}
// 배열의 길이를 넘어가는 경우를 처리하기 위해 모듈로 연산 (% length)를 사용하여 배열을 순환한다.
// 모듈로 연산(%)을 사용하는 것은 프로그래밍에서 순환 구조를 구현할 때 자주 사용되는 기법!
