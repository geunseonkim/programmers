// [programmers - 외계어 사전](https://school.programmers.co.kr/learn/courses/30/lessons/120869?language=javascript)

// Solution
function solution(spell, dic) {
  const sortedSpell = spell.sort().join("");

  for (let word of dic) {
    sortedWord = word.split("").sort().join("");
    if (sortedSpell === sortedWord) return 1;
  }
  return 2;
}

/* Review
solve with sort and join (ex, dwf -> dfw)
 */

//simple way
function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
