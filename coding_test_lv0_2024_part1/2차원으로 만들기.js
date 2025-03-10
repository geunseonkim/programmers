function solution(num_list, n) {
  // (1)
  //   let result = [];
  //   for (let i = 0; i < num_list.length; i += n) {
  //     const arr = num_list.slice(i, i + n);
  //     result.push(arr);
  //   }
  //   return result;
  // slice 메서드는 새로운 배열을 생성하므로 메모리를 추가로 사용할 수 있다.
  // 배열의 길이가 길 경우 성능에 영향을 미칠 수 있음!

  // (2)
  let result = [];
  let temp = [];
  for (num of num_list) {
    temp.push(num);
    if (temp.length === n) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
  // 추가적인 배열 할당이 없고 가독성이 좋음.
  // but 이 코드는 num_list 배열을 순회하면서 매 반복마다 temp.length === n을 체크함!
  // 이 과정에서 조건문이 반복, 각 반복에서 조건을 체크하고 실행하는 과정이 반복됨.

  // (3)
  //   let result = [];
  //   while (num_list.length) {
  //     // while (num_list.length > 0)
  //     result.push(num_list.splice(0, n));
  //   }
  //   return result;
  // splice 메서드는 원본 배열을 변경한다.
}
