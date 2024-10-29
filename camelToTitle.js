function camelToTitleCase(word) {
  if (word === "") {
    return "";
  }
  const words = word.match(/([A-Z]?[^A-Z]*)/g).filter(Boolean);

  if (words.length > 0) {
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  }

  return words.join(" ").trim();
}

console.log(camelToTitleCase("firstChild"));
