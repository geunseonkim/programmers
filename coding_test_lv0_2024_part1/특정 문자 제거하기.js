// replace는 한 번만 실행한다. 전부 바꾸고 싶으면 replaceAll

// function solution(my_string, letter) {
//   return my_string.replaceAll(letter, "");
// }

// 신박함!
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}
