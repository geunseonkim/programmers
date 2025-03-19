// [programmers - 영어가 싫어요](https://school.programmers.co.kr/learn/courses/30/lessons/120894?language=javascript)

// Solution
function solution(numbers) {
  const numMapping = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (let word in numMapping) {
    numbers = numbers.replaceAll(word, numMapping[word]);
  }

  return parseInt(numbers);
}

/* Review
  
  Used a mapping to replace words with numbers
  replaceAll is simpler than split().join()
  parseInt or Number work for conversion
  */

function solution(numbers) {
  const mapping = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (let key in mapping) {
    numbers = numbers.split(key).join(mapping[key]);
  }

  return Number(numbers);
}
