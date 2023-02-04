/*
	The describe block
	1. Is a built in function.. It is called with parenthesis.
	2. It takes in 2 aruguments.
		i. The function name.
		ii. the function that holds the individual test.
*/

const reverseString = require('./reversestring');

describe('Test for reverse string', () => {
  it('should reverse the string', () => {
    const str = 'education';
    expect(reverseString(str)).toMatch('noitacude');
  });
  it('should reverse the string', () => {
    const str = 'understand';
    expect(reverseString(str)).toMatch('dnatsrednu');
  });
});
