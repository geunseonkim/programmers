// [programmers - 로그인 성공?](https://school.programmers.co.kr/learn/courses/30/lessons/120883?language=javascript)

// Solution
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  for (let [db_id, db_pw] of db) {
    if (db_id === id) {
      return db_pw === pw ? "login" : "wrong pw";
    }
  }
  return "fail";
}

/* Review
구조분해를 사용해서 배열을 쉽게 풀이.
*/

// other way
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
