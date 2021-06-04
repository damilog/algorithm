function solution(meeting) {
  const rooms = [];
  let end = 0;
  const arr = meeting.sort((a, b) => {
    return b[0] === b[1] ? a[0] - b[0] : a[1] - b[1];
  });

  arr.forEach(x => {
    if (!rooms.length) {
      rooms.push(x);
      end = x[1];
    } else {
      if (x[0] >= end) {
        rooms.push(x);
        end = x[1];
      }
    }
  });

  return rooms.length;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr2));
