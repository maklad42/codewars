function patience(cards) {
  cards = cards.map((x) =>
    x.replace(/A/g, 1).replace(/J/g, 11).replace(/Q/g, 12).replace(/K/g, 13)
  );

  // Deal
  var deal = Array.from({ length: 13 }, () => []);
  for (var x = 0; x < 4; ++x) {
    for (var i = 0; i < 13; ++i) {
      deal[i].push(cards.shift() - 1);
    }
  }

  // Play
  var pile = 0,
    card = 0;
  for (i = 0; i < 4; ++i) {
    pile = 12;
    do {
      card = deal[pile] ? deal[pile].pop() : null;
      pile = card;
    } while (pile != null);
  }

  return deal.reduce((c, v, i) => (c += v.length), 0);
}
