function longest_palindrome(s) {
  // set variables
  let len = s.length * 2 + 1,
    idx = 0,
    c = 0,
    r = 0,
    m,
    res = Array(len).fill(0);

  // redefine the given string to handle even length case (abc -> &a&b&c&)
  let newS = new Array(len);
  for (let i = 0; i < len; i++) {
    newS[i] = i % 2 != 0 ? s[idx++] : '$';
  }

  for (let i = 1; i < newS.length - 1; i++) {
    m = 2 * c - i;

    if (r > i) {
      res[i] = Math.min(r - i, res[m]);
    }

    // attempt to expand palindrome centered at i
    while (
      i - (1 + res[i]) >= 0 &&
      i + (1 + res[i]) < len &&
      newS[i + (1 + res[i])] == newS[i - (1 + res[i])]
    ) {
      res[i]++;
    }

    // if palindrome centered at i extends past right edge,
    // adjust centre based on expanded palindrome.
    if (i + res[i] > r) {
      c = i;
      r = i + res[i];
    }
  }
  return longPaliSub(res, newS.join(''));
}

function longPaliSub(res, s) {
  let l = 0;
  let c = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] > l) {
      l = res[i];
      c = i;
    }
  }
  return s.substring(c - l, c + l).replace(/\$/g, '');
}
