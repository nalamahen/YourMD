const filterInput = input => {
  const wordsToFilter = ["I", "have", "a", "me"];

  const filteredWords = input.split(" ").filter(word => {
    return !wordsToFilter.includes(word);
  });
  return filteredWords.join(" ").split(" and ");
};

const compareWords = (inputArr, line) => {
  return inputArr.includes(line);
};

module.exports = {
  filterInput,
  compareWords
};
