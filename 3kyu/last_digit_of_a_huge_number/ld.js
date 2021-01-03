// https://stackoverflow.com/questions/51304865/last-digit-of-power-list

function lastDigit(as) {
  return as.reduceRight((acc, val) =>
    Math.pow(val < 20 ? val : (val % 20 + 20), acc < 4 ? acc : (acc % 4 + 4))
  , 1) % 10;
}
