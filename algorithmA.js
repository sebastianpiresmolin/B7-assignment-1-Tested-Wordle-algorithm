/*Algorithm A
This algorithm compares the user's input to the correct answer
and returns the number of correct characters or incorrect or misplaced characters.*/

function algorithmA(userInput, correctAnswer) {
  //first i convert the user input and the correct answer to uppercase and then split them into arrays.
  userInput = userInput.toUpperCase().split('');
  correctAnswer = correctAnswer.toUpperCase().split('');
  //then i create an empty array called result and a variable called duplicateCounter and set it to 0.
  let result = [];
  let duplicateCounter = 0;
  //then i create a for loop that iterates through the user input and checks if the user input is equal to the correct answer.
  for (let i = 0; i < correctAnswer.length; i++) {
    if (userInput[i] === correctAnswer[i]) {
      result.push({ letter: userInput[i], result: 'correct' });
    }
    //if the user input is not equal to the correct answer, i check if the correct answer includes the user input.
    else if (correctAnswer.includes(userInput[i])) {
      //if the correct answer includes the user input, i check if the user input has more instances of the same letter than the correct answer.
      if (
        userInput.filter((char) => char === userInput[i]).length >
        correctAnswer.filter((char) => char === userInput[i]).length +
          duplicateCounter
      ) {
        //if the user input has more instances of the same letter than the correct answer, i increment the duplicateCounter and push the letter to the result array with the result 'incorrect'.
        duplicateCounter++;
        result.push({ letter: userInput[i], result: 'incorrect' });
      }
      //if the user input does not have more instances of the same letter than the correct answer, i push the letter to the result array with the result 'misplaced'.
      else {
        result.push({ letter: userInput[i], result: 'misplaced' });
      }
    }
    //if the user input is not equal to the correct answer and the correct answer does not include the user input, i push the letter to the result array with the result 'incorrect'.
    else {
      result.push({ letter: userInput[i], result: 'incorrect' });
    }
  }
  return result;
}

let testrunA = algorithmA('sompss', 'kospis');

console.log(testrunA);

export default algorithmA;
