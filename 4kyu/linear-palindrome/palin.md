[https://www.codewars.com/kata/5dcde0b9fcb0d100349cb5c0](https://www.codewars.com/kata/5dcde0b9fcb0d100349cb5c0)

## Tags

- Algorithms
- Performance
- Puzzles
- Games

## Details

A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., 'madam' or 'racecar'. Even the letter 'x' is considered a palindrome.

For this Kata, you are given a string `s`. Write a function that returns the longest *contiguous* palindromic substring in `s` (it could be the entire string). In the event that there are multiple longest palindromic substrings, return the first to occur.

I'm not trying to trick you here:

- You can assume that all inputs are valid strings.
- Only the letters a-z will be used, all lowercase (your solution should, in theory, extend to more than just the letters a-z though).

**NOTE:** Quadratic asymptotic complexity *(O(N^2))* or above will **NOT** work here.

---

## Examples

---

## Testing

Along with the example tests given:

- There are **500** tests using strings of length in range [1 - 1,000]
- There are **50** tests using strings of length in range [1,000 - 10,000]
- There are **5** tests using strings of length in range [10,000 - 100,000]

All test cases can be passed within 10 seconds, but non-linear solutions will time out every time. *Linear performance is essential*.

## Good Luck!
