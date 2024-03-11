/*Algorithm A
This algorithm compares the user's input to the correct answer
and returns the number of correct characters or incorrect or misplaced characters.*/

function algorithmA(userInput, correctAnswer) {
  userInput = userInput.toUpperCase().split('');
  correctAnswer = correctAnswer.toUpperCase().split('');

  let result = [];

  for (let i = 0; i < correctAnswer.length; i++) {
    if (userInput[i] === correctAnswer[i]) {
      result.push({ letter: userInput[i], result: 'correct' });
    } else if (correctAnswer.includes(userInput[i])) {
      if (
        userInput.filter((char) => char === userInput[i]).length >
        correctAnswer.filter((char) => char === userInput[i]).length
      ) {
        result.push({ letter: userInput[i], result: 'incorrect' });
      } else {
        result.push({ letter: userInput[i], result: 'misplaced' });
      }
    } else {
      result.push({ letter: userInput[i], result: 'incorrect' });
    }
  }
  return result;
}

let testrun = algorithmA('TTTT', 'TEST');

console.log(testrun);

export default algorithmA;

//ordetIdinLista.filter((char) => char === Alfabetet[i]).length > 1