function cardsConverter(input) {
  let suits = ['c', 'd', 'h', 's'],
    cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'],
    res = [],
    suit,
    card,
    n = false;

  // exceptions
  if (input == []) return [];
  if (typeof input !== 'object') return null;

  // test for numerical or string input
  if (typeof input[0] == 'number') {
    n = true;
    input = input.sort((a, b) => a - b);
  }

  for (let i = 0; i < input.length; i++) {
    if (n) {
      suit = suits[Math.floor(input[i] / 13)];
      card = cards[input[i] % 13];
      res.push('' + card + suit);
    } else {
      suit = suits.indexOf(input[i][1]) * 13;
      card = cards.indexOf(input[i][0]);
      res.push(suit + card);
    }
  }
  return n ? res : res.sort((a, b) => a - b);
}
