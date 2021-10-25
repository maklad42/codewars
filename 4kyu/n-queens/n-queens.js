// Refernce:
// https://en.wikipedia.org/wiki/Eight_queens_puzzle#Existence_of_solutions

function nQueen(N) {
  // ignore impossible boards
  if (N == 2 || N == 3) return [];

  // create list of odd and even numbers up to N
  let evnList = Array.apply(null, { length: Math.floor(N / 2) }).map(
      (x, i) => 2 * (i + 1)
    ),
    oddList = Array.apply(null, { length: Math.ceil(N / 2) }).map(
      (x, i) => 2 * i + 1
    );

  if (N % 6 === 2) {
    [oddList[0], oddList[1]] = [oddList[1], oddList[0]];
    oddList.splice(2, 1);
    oddList.push(5);
  }
  if (N % 6 === 3) {
    evnList.shift();
    evnList.push(2);
    oddList.splice(0, 2);
    oddList.push(1, 3);
  }

  let result = evnList.concat(oddList).map((x) => N - x);
  result = Array(N)
    .fill(0)
    .map((x, i) => result.indexOf(i));
  return result;
}
