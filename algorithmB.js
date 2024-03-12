//ordetIdinLista.filter((char) => char === Alfabetet[i]).length > 1

function algorithmB(length, hasDuplicates) {
  const wordBank = [
    'fantasy',
    'student',
    'language',
    'lend',
    'stereotype',
    'producer',
    'cope',
    'labour',
    'misplace',
    'coma',
    'guideline',
    'shelter',
    'video',
    'passive',
    'coincidence',
    'railroad',
    'dilute',
    'circulate',
    'bacon',
    'prize',
    'back',
    'tycoon',
    'humanity',
    'redundancy',
  ];

  let results = [];
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let duplicates = hasDuplicates;

  function filterResults(currentValue, index) {
    for (let j)
  }

  if (length) {
    for (let i = 0; i < wordBank.length; i++) {
      if (wordBank[i].length === length) {
        results.push(wordBank[i]);
      }
    }
  }

  if (duplicates === false) {
    results.forEach(filterResults);
  }
  return results;
}

let testrunB = algorithmB(7, false);
console.log(testrunB);

export default algorithmB;
