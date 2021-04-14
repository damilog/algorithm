// #6 홀수
// 7개의 자연수가 주어질 때,
// 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요
function solution(arr) {
  const oddArr = arr.reduce((acc, num) => {
    if (num % 2 !== 0) acc.push(num);
    return acc;
  }, []);

  const sum = oddArr.reduce((acc, num) => {
    return acc + num;
  }, 0);

  console.log(oddArr, sum);
}

arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);
