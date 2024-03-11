import algorithmA from './app';

/* I have challenged my self to write my tests before writing the actual code.
This is because I realized that a big part of the challenge with writing the tests for the cinema project was that
the code was already written and in some ways already dependant on other pieces of code. This made it significantly
more difficult and I found myself "adjusting" my tests to fit the already written function, when in reality
the function should be dictated by the test cases. */

//I started by writing a test that checks if the function returns the correct output when the user input is correct.
//I did this because it is the most basic test case and it will help me understand how the function should work.
test('Show message "Correct!" if the user input is correct', () => {
  const userInput = 'Testing';
  const correctAnswer = 'Testing';
  const expectedOutput = 'Correct!';

  //I then wrote the expected output and the input for the function. And gave it my mocked userInput and correctAnswer.

  const result = algorithmA(userInput, correctAnswer);

  //I then called the function with the input and stored the result in a variable called result.
  expect(result).toBe(expectedOutput);
});

/*I then wrote a test that checks if the function returns the correct output when
the user input is completely incorrect.*/
test('Show message "0 out of 7 characters are correct." if the user inputs "Johnny"', () => {
  const userInput = 'Johnny';
  const correctAnswer = 'Testing';
  const expectedOutput = '0 out of 7 characters are correct.';

  const result = algorithmA(userInput, correctAnswer);

  expect(result).toBe(expectedOutput);
});

/* I then wrote a test that checks if the function returns the correct output when the user input is partially correct.
I did this because it is the most common test case and it will help me understand how the function should work and
it is the most likely scenario for the user to input the wrong answer due to capitalization.*/
test('Show message "6 out of 7 characters are correct." if the user inputs "nEsTiNg"', () => {
  const userInput = 'nEsTiNg';
  const correctAnswer = 'Testing';
  const expectedOutput = '6 out of 7 characters are correct.';

  const result = algorithmA(userInput, correctAnswer);

  expect(result).toBe(expectedOutput);
});
