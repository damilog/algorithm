//순열 구하기
//10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

function solution(m, arr) {
  const n = arr.length;
  const answer = [];
  let check = [0, 0, 0]; // 체크배열
  let tmp = [0, 0]; // 순열 넣는 배열

  function DFS(step) {
    if (step === m) {
      //m개를 뽑으면
      answer.push([...tmp]);
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1; //i번째 숫자 사용했다고 체크
          tmp[step] = arr[i]; //tmp에 숫자 넣고
          DFS(step + 1); //다음 스텝으로
          check[i] = 0; //back하는 지점 : check 풀기
        }
      }
    }
  }
  DFS(0, 0);
  console.log(answer);
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
