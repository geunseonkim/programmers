// 자바스크립트로 현재 날짜 보는 법.
const currentYear = now.getFullYear(); // 현재 연도
const currentMonth = now.getMonth() + 1; // 현재 월 (0부터 시작하므로 1을 더함)
const currentDate = now.getDate(); // 현재 일

console.log(`현재 날짜: ${currentYear}-${currentMonth}-${currentDate}`);

function solution(age) {
  const currentYear = 2022;
  return currentYear - (age - 1);

  // const currentYear = new Date().getFullYear()
  // return currentYear - (age - 1) // 문제는 2022년 기준.
}
