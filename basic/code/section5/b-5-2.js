//#2. 공통원소 구하기
//A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여
//오름차순으로 출력하는 프로 그램을 작성하세요.
function solution(arr1, arr2) {
  let answer = [];
  let p1 = (p2 = 0);
  const arrA = [...arr1].sort();
  const arrB = [...arr2].sort();
  while (p1 < arrA.length && p2 < arrB.length) {
    if (arrA[p1] === arrB[p2]) {
      answer.push(arrA[p1++]);
      p2++;
    } else {
      arrA[p1] < arrB[p2] ? p1++ : p2++;
    }
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
