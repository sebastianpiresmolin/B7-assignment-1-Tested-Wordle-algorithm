/*Algorithm A
This algorithm compares the user's input to the correct answer
and returns the number of correct characters or "Correct!" if the user's input is correct.*/

function algorithmA(userInput, correctAnswer) {
  userInput = userInput.toLowerCase().split('');
  correctAnswer = correctAnswer.toLowerCase().split('');

  let result = [];

  for (let i = 0; i < correctAnswer.length; i++) {
    if (userInput[i] === correctAnswer[i]) {
      result.push(`${userInput[i]} / correct` + '\n');
    } else if (correctAnswer.includes(userInput[i])) {
      result.push(`${userInput[i]} / missplaced` + '\n');
      let index = correctAnswer.indexOf(userInput[i]);
      correctAnswer.splice(index, 1);
    } else {
      result.push(`${userInput[i]} / incorrect` + '\n');
    }
  }
  return result.join('');
}

let testrun = algorithmA('hallå', 'cykel');

console.log(testrun);

export default algorithmA;
