//ordetIdinLista.filter((char) => char === Alfabetet[i]).length > 1

function algorithmB(words, length, hasDuplicates) {
  words = words.split(' ')

  let results = [];
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let characters = alphabet.split();
  let duplicates = hasDuplicates;

  function filterResults(currentValue, index) {
    for (let j = 0; j < characters.length; j++) {
      if (currentValue.split().filter((char) => char === characters[j]).length > 1) {
        results.splice(index, 1);
      }
    }
  }

  if (length) {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length === length) {
        results.push(words[i]);
      }
    }
  }

  if (duplicates === false) {
    results.forEach(filterResults);
  }
  return results;
}

//let testrunB = algorithmB(7, false);
//console.log(testrunB);

export default algorithmB;
