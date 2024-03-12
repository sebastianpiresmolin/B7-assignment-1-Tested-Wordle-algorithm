/* 
  Algorithm B
  - The function takes in 3 parameters: a string of words, a number, and a boolean
  - The function returns an array of words that are the same length as the number parameter
  - If the boolean parameter is true, the function returns an array of words that are the same length as the number parameter
  - If the boolean parameter is false, the function returns an array of words that are the same length as the number parameter and have no duplicate letters
*/

function algorithmB(words, length, hasDuplicates) {
  //split the words into an array
  words = words.split(' ');
  //create an empty array called results which will be used to store the filtered words
  let results = [];
  //create a variable called duplicates and set it to the value of the hasDuplicates parameter
  let duplicates = hasDuplicates;
  // if the length parameter is set to a number, filter out words that are not the same length as the number parameter
  if (length) {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length === length) {
        results.push(words[i]);
      }
    }
  }
  // if the duplicates parameter is set to false, filter out words that have duplicate letters
  if (duplicates === false) {
    results = results.filter((currentValue) => {
      return currentValue.split('').every((char, index, self) => {
        return self.indexOf(char) === index;
      });
    });
  }
  // if the results array is empty, return an error message
  if (results.length === 0) {
    return 'No words were found with the given parameters. Please change the parameters and try again.';
  }
  // if the results array is not empty, return a random word from the results array
  let randomizer = Math.floor(Math.random() * results.length);
  return results[randomizer];
}

let testrunB = algorithmB('passive monarch', 7, true);
console.log(testrunB);

export default algorithmB;
