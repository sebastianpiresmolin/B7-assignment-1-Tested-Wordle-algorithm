import algorithmB from "./algorithmB";

/* making sure that the function is imported and working properly */
test('algorithmB function is defined and is a function', () => {
    expect(typeof algorithmB).toEqual('function');
  });

  // testing to see if the the length parameter is working properly
  test('making sure the length is correct', () => {
    const result = algorithmB(5, true);
    expect(result).toEqual(['video', 'bacon', 'prize']);
  });
// testing to see if the duplicate parameter is working properly when set to its default value 'true'
  test('test duplicate=true', () => {
    const result = algorithmB(7, true);
    expect(result).toContain('passive');
  });

  test('test duplicate=false', () => {
    const result = algorithmB(7, false);
    expect(result).not.toContain('passive');
  });