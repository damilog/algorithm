function solution(arr1, arr2) {
  let answer = [];
  arr1.forEach(v => {
    !answer.includes(v) && answer.push(v);
  });
  arr2.forEach(v => {
    !answer.includes(v) && answer.push(v);
  });

  return answer.sort();
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
