function listPosition(word) {
  /*  Function: calculatePermutations(word)  */
  const calculatePermutations = (word) => {
    const f = factorial(word.length).toString();

    const letterCountsMap = getLetterCountsMap(word);

    const dividerF = Object.values(letterCountsMap).reduce(
      (acc, letterCount) => acc * factorial(letterCount),
      1
    );

    return f / dividerF;
  };

  /*  Function: factorial(n)  */
  let f = [1, 1];
  let i = 2;

  const factorial = (n) => {
    if (f[n] !== undefined) return f[n];

    for (; i <= n; i++) {
      f[i] = f[i - 1] * i;
    }

    return f[n];
  };

  /*  Function: getLetterCountsMap(word)  */
  const getLetterCountsMap = (word) =>
    word.split('').reduce((acc, letter) => {
      acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
      return acc;
    }, {});

  /*  Function: calculatePermutationSortOrder(word)  */
  const calculatePermutationSortOrder = (word) => {
    const sortedLetters = word.split('').sort();

    return word.split('').reduce((acc, letter) => {
      const index = sortedLetters.indexOf(letter);

      sortedLetters.splice(index, 1);

      const lettersAhead = [...new Set(sortedLetters.slice(0, index))];

      return (
        acc +
        lettersAhead.reduce(
          (a, l) =>
            a +
            calculatePermutations(sortedLetters.join('').replace(l, letter)),
          0
        )
      );
    }, 1);
  };

  return calculatePermutationSortOrder(word);
}
