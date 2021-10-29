function reduceCards(input) {
  let cards = 'A23456789TJQK',
    res = [];

  // handle exceptions
  if (input == []) return [];
  if (typeof input != 'object') return null;

  // test for numerical or string input
  if (typeof input[0] == 'number') {
    res = input.map((x) => x % 13).sort((a, b) => a - b);
  } else {
    for (let i = 0; i < input.length; i++) {
      res.push(cards.indexOf(input[i][0]));
    }
    res = res.sort((a, b) => a - b).map((x) => cards[x]);
  }

  return res;
}
