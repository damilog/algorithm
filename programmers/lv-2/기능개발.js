function solution(progresses, speeds) {
  const answer = [];
  let works = 0;
  let maxDay = 0;
  let currentDay;
  const days = progresses.map((x, idx) => Math.ceil((100 - x) / speeds[idx]));

  days.forEach((value, idx) => {
    if (value > maxDay) {
      maxDay = value;
      if (idx > 0) {
        answer.push(works);
        works = 0;
      }
    }
    works++;
  });

  answer.push(works);
  return answer;
}
