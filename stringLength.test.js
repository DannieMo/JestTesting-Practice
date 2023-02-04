const stringLength = require('./stringlength');

// import moduleName from 'module';

describe('Test the length of string', () => {
  it('is not empty', () => {
    const str = '';
    expect(stringLength(str)).not.toEqual(0);
  });
  it('not greater than 10', () => {
    const str = 'cash is scarce in Nigeria';
    expect(stringLength(str)).toBeUndefined();
  });
});
