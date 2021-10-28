function nextBigger(n) {
  let sPoint = -1;
  let s = n.toString().split('');

  // start at the end and find the first number that is bigger than the one before it
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] > s[i - 1]) {
      sPoint = i - 1;
      break;
    }
  }

  // if no split point was found
  if (sPoint == -1) return -1;

  // set this bigger number as the split
  let right = s.splice(sPoint);
  let sp = right.shift();

  // find the next biggest number in the right hand side part
  let big = 99;
  let bigPos = -1;

  for (let i = 0; i < right.length; i++) {
    if (right[i] > sp && right[i] < big) {
      big = right[i];
      bigPos = i;
    }
  }

  if (big == 99) return -1;

  // switch the split point number and this next biggest number
  right[bigPos] = sp;

  // sort the right hand side remaining digits
  right = right.sort((a, b) => a - b);

  return +(s.join('') + big + right.join(''));
}
