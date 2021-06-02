function solution(target, arr) {
  let low = 0;
  let high = arr.length;
  arr.sort((a, b) => a - b);
  while (low <= high) {
    let center = parseInt((low + high) / 2);
    if (arr[center] === target) {
      return center + 1;
    } else if (arr[center] <= target) {
      low = center + 1;
    } else {
      high = center - 1;
    }
  }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
