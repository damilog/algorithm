//최대점수 구하기(DFS)
//m: 제한시간 ps: 최대 점수  pt:
function solution(m, ps, pt) {
  //문제를 풀면 시간이 + 패스하면 +0
  // 제한시간이 되면 리턴

  let maxScore = 0;
  function DFS(idx, accScore, accTime) {
    if (accTime > m) return;
    if (idx === ps.length) {
      maxScore = Math.max(maxScore, accScore);
    } else {
      DFS(idx + 1, accScore + ps[idx], accTime + pt[idx]); //문제 푸는 루트
      DFS(idx + 1, accScore, accTime); //문제 안 푸는 루트
    }
  }
  DFS(0, 0, 0);
  return maxScore;
}

let ps = [10, 25, 15, 6, 7]; //점수
let pt = [5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt));
