//이진트리 순회(깊이우선탐색)

function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + " ";
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
console.log("정답 1 2 4 5 3 6 7");
