function solution(num_list) {
  let result = [];
  num_list.forEach((i) => result.unshift(i));
  return result;
}

// function solution(num_list) {
//   let copy_num_list = [...num_list];
//   return copy_num_list.reverse();
// }

// function solution(num_list) {
//   let copy_num_list = [...num_list];
//   //   return copy_num_list.sort((a, b) => b - a); // 올바른 방법이지만 숫자 내림차순을 하게 된다. 의도한 건 단지 숫자 배열의 역순.
//   return copy_num_list.sort((a, b) => -1);
// }

// function solution(num_list) {
//   let copy_num_list = [...num_list];
//   let result = [];
//   while (copy_num_list.length > 0) {
//     console.log(copy_num_list); // pop()을 쓰면 원본 배열에서도 사라진다.
//     result.push(copy_num_list.pop());
//   }
//   return result;
// }

// function solution(num_list) {
//   const lastNum = num_list.length - 1;
//   console.log(typeof lastNum);
//   const result = [];
//   for (let i = lastNum; i >= 0; i--) {
//     // result[lastNum - i] = num_list[i]
//     result.push(num_list[i]);
//   }
//   return result;
// }
