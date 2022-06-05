function goodVsEvil(good, evil) {
  const garray = [1, 2, 3, 3, 4, 10];
  const earray = [1, 2, 2, 2, 3, 5, 10];
  let g = good.split(' ').reduce((x, y, i) => x + +y * garray[i], 0);
  let e = evil.split(' ').reduce((x, y, i) => x + +y * earray[i], 0);

  return g > e
    ? 'Battle Result: Good triumphs over Evil'
    : g < e
    ? 'Battle Result: Evil eradicates all trace of Good'
    : 'Battle Result: No victor on this battle field';
}
