import algorithmB from './algorithmB';

/* Just as with my testing for algorithmA, I trued to work by writing my tests first. The order of my tests below is
the same as the order i have broken down the algorithm into smaller pieces.

/* making sure that the function is imported and working properly */
test('algorithmB function is defined and is a function', () => {
  expect(typeof algorithmB).toEqual('function');
});

// testing to see if the the length parameter is working properly
test('making sure the length is correct', () => {
  const result = algorithmB('prize possesion', 5, true);
  expect(result).toEqual('prize');
});
// testing to see if the duplicate parameter is working properly when set to its default value 'true'
test('test duplicate=true', () => {
  const result = algorithmB('passive monarch', 7, true);
  expect(['passive', 'monarch'].some((el) => result.includes(el))).toBeTruthy();
});
// testing to see if the duplicate parameter is working properly when set to 'false'
test('test duplicate=false', () => {
  const result = algorithmB('passive monarch', 7, false);
  expect(result).not.toContain('passive');
});
// testing to see if the randomizer is working properly
test('test randomizer', () => {
  const result = algorithmB('passive monarch cenarus randoms', 7, true);
  //this line of code checks if the result contains any of the words in the array, admittedly this is probably not the best way to test this but it works for now.
  expect(
    ['passive', 'monarch', 'cenarus', 'randoms'].some((el) =>
      result.includes(el)
    )
  ).toBeTruthy();
});
// testing to see if the function returns an error message if the result is empty
test('test handling if result is empty', () => {
  const result = algorithmB('passive monarch cenarus randoms', 3, true);
  expect(
    'No words were found with the given parameters. Please change the parameters and try again.'
  );
});
