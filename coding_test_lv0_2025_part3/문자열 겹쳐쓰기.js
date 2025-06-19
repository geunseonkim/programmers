// [programmers - 문자열 겹쳐쓰기](https://school.programmers.co.kr/learn/courses/30/lessons/181943)

// Solution
function solution(my_string, overwrite_string, s) {
  const replaceStr =
    [...my_string].slice(0, Number(s)).join("") + overwrite_string;
  if (replaceStr.length === my_string.length) {
    return replaceStr;
  } else {
    const diff = my_string.length - replaceStr.length;
    return (
      replaceStr + my_string.slice(my_string.length - diff, my_string.length)
    );
  }
}

// Solution refactoring
function solution(my_string, overwrite_string, s) {
  const replaceStr = my_string.slice(0, Number(s)) + overwrite_string;
  return replaceStr + my_string.slice(s + overwrite_string.length);
}

/* Review
slice는 문자열에도 사용 가능. so 배열로 만들고 join("")으로 합칠 이유가 없음.

slice(숫자) ==> 숫자 인덱스부터 문자열 or 배열의 끝까지를 잘라서 반환.
 */

// simple way
function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}
