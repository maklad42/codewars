function finance(n) {
  let tot = 0;
  let start = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = start; j <= n; j++) {
      tot += start + j;
    }
    start++;
  }
  return tot;
}

// without loops
const finance = (n) => (n * (n + 1) * (n + 2)) / 2;
