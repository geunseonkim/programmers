// [programmers - 옹알이 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript)

// Solution
function solution(babbling) {
  const regex = /^(aya|ye|woo|ma)+$/;
  return babbling.filter((word) => {
    if (!regex.test(word)) return false; // 네 단어 중 하나만 연속, 중복 사용x

    for (let sound of ["aya", "ye", "woo", "ma"]) {
      if (word.includes(sound + sound)) return false; // 중복 발음 방지
    }

    return true;
  }).length;
}

/* Review
문자열 비교 => 정규식 사용.
test() 함수 사용 - 문자열이 그 정규표현식에 맞는지 확인한 후 true/false 반환.
   */

// other way
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
