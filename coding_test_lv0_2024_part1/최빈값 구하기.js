// function solution(array) {
//     let sameNum = 1;
//     let totalArray = {}

//     if(array.length === 1) {
//         totalArray[array] = 1
//     }

//     for(let i = 0; i < array.length; i++){
//         if(array[i] === array[i + 1]) {
//             sameNum++
//         } else {
//             if(sameNum > 1) {
//                 totalArray[array[i]] = sameNum
//             }
//             sameNum = 1
//         }
//     }
//     console.log("totalArray", totalArray)

//     let mode = null;
//     let maxValue = 0;

//     Object.keys(totalArray).forEach(key=>{
//         if(totalArray[key] > maxValue) {
//             maxValue = totalArray[key]
//             mode = parseInt(key)
//         } else if (totalArray[key] === maxValue) {
//                 mode = -1
//         }
//     })
//     console.log('mode', mode)
//     return mode
// }
// 위의 코드는 최빈값이 여러 개일 때 -1을 올바르게 처리x.

function solution(array) {
  if (array.length === 1) {
    return array[0];
  }

  let frequency = {};

  // (1)
  //   array.forEach((num) => {
  //     if (frequency[num]) {
  //       // num이 이미 frequency 객체에 존재하는 key? 그 key의 value 1 증가.
  //       frequency[num]++;
  //     } else {
  //       frequency[num] = 1;
  //     }
  //   });

  // (2)
  // array.forEach(num => frequency[num]? frequency[num]++ : frequency[num] = 1)

  // (3)
  array.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
  console.log("frequency", frequency);

  let mode = -1;
  let maxValue = 0;
  let count = 0;

  Object.keys(frequency).forEach((key) => {
    const freq = frequency[key];
    if (freq > maxValue) {
      maxValue = freq;
      mode = key;
      count = 1;
    } else if (freq === maxValue) {
      count++;
    }
  });

  // (1)
  //   if (count > 1) {
  //     return -1;
  //   } else {
  //     return parseInt(mode);
  //   }

  // (2)
  //  count > 1 ? -1 : parseInt(mode)

  // (3)
  return count > 1 ? -1 : parseInt(mode);
}
