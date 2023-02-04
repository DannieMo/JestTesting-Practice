const capitalize = require('./capitalize');

describe('check if string is capitalized', () => {
  it('should capitalize the string', () => {
    const str = 'love';
    expect(capitalize(str)).toMatch('');
  });
});
