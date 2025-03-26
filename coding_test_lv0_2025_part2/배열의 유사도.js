// [programmers - 배열의 유사도](https://school.programmers.co.kr/learn/courses/30/lessons/120903?language=javascript)

// Solution
function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        answer += 1;
      }
    }
  }
  return answer;
}

/* Review
    
Use filter to find common elements, which is more concise compared to the for loop
    */
function solution(s1, s2) {
  const overlap = s1.filter((x) => s2.includes(x));
  return overlap.length;
}
