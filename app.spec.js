import algorithmA from './app';

/* I have challenged my self to write my tests before writing the actual code.
This is because I realized that a big part of the challenge with writing the tests for the cinema project was that
the code was already written and in some ways already dependant on other pieces of code. This made it significantly
more difficult and I found myself "adjusting" my tests to fit the already written function, when in reality
the function should be dictated by the test cases. */


/* Ensures that the wordle function is properly implemented. 
Without this, all other tests would be meaningless. */

test('algorithmA function is defined and is a function', () => {
  expect(typeof algorithmA).toEqual('function');
});


// testing to see if the function returns the correct result when the user input is completely correct
test('Correct letters are marked as correct', () => {
  const result = algorithmA('TEST', 'TEST');
  expect(result).toEqual([
    { letter: 'T', result: 'correct' },
    { letter: 'E', result: 'correct' },
    { letter: 'S', result: 'correct' },
    { letter: 'T', result: 'correct' },
  ]);
});

// testing to see if the function returns the correct result when the user input is completely incorrect
test('Incorrect letters are marked as incorrect', () => {
  const result = algorithmA('TEST', 'AAAA');
  expect(result).toEqual([
    { letter: 'T', result: 'incorrect' },
    { letter: 'E', result: 'incorrect' },
    { letter: 'S', result: 'incorrect' },
    { letter: 'T', result: 'incorrect' },
  ]);
});

// testing to see if the function returns the correct result when the user input is somewhat correct
test('Misplaced letters are marked as misplaced', () => {
  const result = algorithmA('TEST', 'ETST');
  expect(result).toEqual([
    { letter: 'T', result: 'misplaced' },
    { letter: 'E', result: 'misplaced' },
    { letter: 'S', result: 'correct' },
    { letter: 'T', result: 'correct' },
  ]);
});

//testing to see if the function returns the correct result when the user input is somewhat correct and also has
//multiple instances of the same letter.
test('Testing what happens if the same letter is found more instances than what the answer is', () => {
    const result = algorithmA('TTTT', 'TEST');
    expect(result).toEqual([
      { letter: 'T', result: 'correct' },
      { letter: 'T', result: 'incorrect' },
      { letter: 'T', result: 'incorrect' },
      { letter: 'T', result: 'correct' },
    ]);
  });


test('Empty strings return an empty array', () => {
  const result = algorithmA('', '');
  expect(result).toEqual([]);
});
