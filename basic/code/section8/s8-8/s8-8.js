//중복 순열 구하기
function solution(n, m) {
  debugger;
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      //2번째 돌때 push
      answer.push([...tmp]);
    } else {
      //0,1번째돌 때 temp에 값넣기
      for (let i = 1; i <= n; i++) {
        tmp[L] = i; //DFS(0)-> temp[0] = 1 -> DFS(1) -> temp[1] = 1 -> DFS(2) -> 탈출
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));

//1~3 중에 2개 뽑아서 나열 하는 방법 3x3
