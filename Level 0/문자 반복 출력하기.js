function solution(my_string, n) {
  return (answer = [...my_string].map((i) => i.repeat(n)).join(""));
}
// solution("abc", 3) // "aaabbbccc" 반환.

// 실수 1
// function solution(my_string, n) {
//   let answer = [...my_string].forEach((i) => i.repeat(n));
//   console.log(answer);
//   return answer;
// }

// forEach는 반환값이 없는 메소드로, undefined를 반환. 따라서 answer는 항상 undefined가 된다.
// i.repeat(n)은 단순히 반복된 문자열을 생성하지만, 그 값을 어딘가에 저장하거나 누적하지 않는다.

// 실수 2
// function solution(my_string, n) {
//   return (answer = [...my_string].map((i) => i.repeat(n).join("")));
// }

// map이 감싸지는 범위, join()을 사용할 시점.
