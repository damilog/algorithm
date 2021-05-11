//Least Recently Used(카카오 캐시 문제 변형)
//캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면
//N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램을 작성하세요.
function solution(size, arr) {
  let cache = Array.from({ length: size });
  const works = [...arr];

  works.forEach(work => {
    if (cache.includes(work)) {
      const idx = cache.indexOf(work);
      const cur = cache[idx];
      cache.unshift(cur);
      cache = cache.slice(0, size);
    } else {
      cache.unshift(work);
      cache = cache.slice(0, size);
    }
  });
  return cache;

  //해야할 것 cache 순회하며 현재 작업 있는 지 확인하기.
  //없다 : 캐시에 수행해야하는 작업이 없다면 맨 앞에 해당 작업을 넣는다.(캐시 미스)
  //있다 : 해당 캐시의 자리를 비운다. 해당 캐시를 가장 앞에 놓고 나머지 cache들 push 하며 줄세우기
  // arr.forEach(work => {
  //     if()
  // })
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
console.log("출력예제 7 5 3 2 6");
