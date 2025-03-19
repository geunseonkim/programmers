// [programmers - 암호 해독](https://school.programmers.co.kr/learn/courses/30/lessons/120892?language=javascript)

// Solution
function solution(cipher, code) {
  var answer = "";
  for (let i = 1; i <= cipher.length / code; i++) {
    answer += cipher[code * i - 1];
  }
  return answer;
}

/* Review

    let i = 1 --> let i = code - 1
    i++ --> i += code

    More intuitive (directly uses index)
    Less computation (no division)
    Cleaner loop structure
    */
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
