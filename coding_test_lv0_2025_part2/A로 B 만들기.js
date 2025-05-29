// [programmers - A로 B 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120886?language=javascript)

// Solution
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}

/* Review
before.split("").sort() === after.split("").sort() -> 두 배열의 내용을 비교하는 게 아니라, 두 배열이 동일한 객체인지 비교.

[ 'e', 'h', 'l', 'l', 'o' ] === [ 'e', 'h', 'l', 'l', 'o' ] // false -> 자바스크립트의 배열 비교 방식 때문. === 연산자는 배열의 "내용"이 아니라 "참조(reference)"를 비교.

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b); // false -> a와 b가 똑같은 값을 갖는 배열이라도, 메모리에서 서로 다른 위치에 존재하는 객체.
*/

//wrong way
function solution(before, after) {
  return before.split("").sort() === after.split("").sort() ? 1 : 0;
}
