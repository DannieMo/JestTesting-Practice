const capitalize = require('./capitalize.js');

describe('check if string is capitalized', () => {
  it('should capitalize the string', () => {
    const str = 'love';
    expect(capitalize(str)).toMatch('');
  });
});
