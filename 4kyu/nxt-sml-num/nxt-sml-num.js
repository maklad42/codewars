function nextSmaller(n) {
  let sPoint = -1;
  let s = n.toString().split('');

  // start at the end and find the first number that is smaller than the one before it
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] < s[i - 1]) {
      sPoint = i - 1;
      break;
    }
  }

  // if no split point was found
  if (sPoint == -1) return -1;

  // set this smaller number as the split
  let right = s.splice(sPoint);
  let sp = right.shift();

  // find the next smallest number in the right hand side part
  let big = -1;
  let bigPos = -1;

  for (let i = 0; i < right.length; i++) {
    if (right[i] < sp && right[i] > big) {
      big = right[i];
      bigPos = i;
    }
  }

  if (big == -1) return -1;

  // switch the split point number and this next biggest number
  right[bigPos] = sp;

  // sort the right hand side remaining digits
  right = right.sort((a, b) => b - a);

  let res = s.join('') + big + right.join('');
  return res[0] == '0' ? -1 : +res;
}
