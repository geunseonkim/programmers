function solution(my_string) {
  return my_string
    .match(/\d/g)
    ?.map(Number) //match가 null을 반환할 가능성을 처리하기 위한 ?(optional chaining) 연산자, null 이면 undefined 처리.
    .reduce((acc, cur) => acc + cur, 0); //(acc += cur) 이렇게 적을 필요x.
}

function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (!isNaN(cur) ? acc + Number(cur) : acc),
    0
  );
}
