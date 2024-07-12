function solution(my_string) {
  // let answer = my_string.split("").reverse().join("")
  let answer = [...my_string].reverse().join("");
  return answer;
}
