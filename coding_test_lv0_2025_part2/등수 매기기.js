// [programmers - 등수 매기기](https://school.programmers.co.kr/learn/courses/30/lessons/120882?language=javascript)

// Solution
function solution(score) {
  const avgList = score.map(([a, b]) => (a + b) / 2);
  const idxAvg = avgList.map((avg, i) => ({ avg, idx: i }));
  idxAvg.sort((a, b) => b.avg - a.avg);

  const ranks = Array(score.length);
  let rank = 1;

  for (let i = 0; i < idxAvg.length; i++) {
    if (i > 0 && idxAvg[i].avg === idxAvg[i - 1].avg) {
      ranks[idxAvg[i].idx] = ranks[idxAvg[i - 1].idx];
    } else {
      ranks[idxAvg[i].idx] = rank;
    }
    rank++;
  }

  return ranks;
}

/* Review
동점자 처리 로직.
 */
