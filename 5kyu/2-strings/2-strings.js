function workOnStrings(a, b) {
  let a2 = a.split(''),
    b2 = b.split(''),
    objA = {},
    objB = {},
    tmp;

  for (let i = 0; i < a2.length; i++) {
    tmp = a2[i].toLowerCase();
    objA[tmp] = objA[tmp] ? objA[tmp] + 1 : 1;
  }
  for (let i = 0; i < b2.length; i++) {
    tmp = b2[i].toLowerCase();
    objB[tmp] = objB[tmp] ? objB[tmp] + 1 : 1;
  }

  let entA2 = Object.entries(objA)
    .filter((x) => x[1] % 2 == 1)
    .map((x) => x[0])
    .filter((x) => b.indexOf(x) > -1 || b.indexOf(x.toUpperCase()) > -1);
  let entB2 = Object.entries(objB)
    .filter((x) => x[1] % 2 == 1)
    .map((x) => x[0])
    .filter((x) => a.indexOf(x) > -1 || a.indexOf(x.toUpperCase()) > -1);

  for (let i = 0; i < a.length; i++) {
    if (entB2.indexOf(a[i]) > -1) {
      a2[i] = a[i].toUpperCase();
    } else if (entB2.indexOf(a[i].toLowerCase()) > -1) {
      a2[i] = a[i].toLowerCase();
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (entA2.indexOf(b[i]) > -1) {
      b2[i] = b[i].toUpperCase();
    } else if (entA2.indexOf(b[i].toLowerCase()) > -1) {
      b2[i] = b[i].toLowerCase();
    }
  }

  return a2.join('') + b2.join('');
}
