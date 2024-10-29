function getWords(word) {
  if (word === "") {
    return [];
  }
  const words = [];
  let index = 0;
  for (let i = 0, len = word.length; i < len; i++) {
    if (
      "A" <= word[i] &&
      word[i] <= "Z" &&
      (("a" <= word[i - 1] && word[i - 1] <= "z") ||
        ("a" <= word[i + 1] && word[i + 1] <= "z"))
    ) {
      words.push(word.slice(index, i));
      index = i;
    }
  }
  words.push(word.slice(index));
  return words;
}

function camelToTitleCase(word) {
  if (word === "") {
    return "";
  }

  let words = getWords(word);
  words[0] = words[0][0].toUppercase() + words[0].slice(1);

  return words.join(" ");
}

console.log(camelToTitleCase("TerePäevast"));
