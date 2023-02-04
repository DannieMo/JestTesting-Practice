const Calculator = require('./calculator.js');

describe('Calculator', () => {
  const cal = new Calculator();
  it('adds two numbers', () => {
    expect(cal.add(9, 3)).toEqual(12);
  });

  it('adds two numbers', () => {
    expect(cal.add(4, 5)).toEqual(9);
  });

  it('adds two numbers', () => {
    expect(cal.add(-2, -4)).not.toEqual(6);
  });

  it('adds two numbers', () => {
    expect(cal.add(-3, 4)).not.toEqual(2);
  });
});

describe('Calculator', () => {
  const cal = new Calculator();
  it('subtract a number from another', () => {
    expect(cal.subtract(9, 3)).toEqual(6);
  });

  it('subtract a number from another', () => {
    expect(cal.subtract(4, 2)).toEqual(2);
  });

  it('subtract a number from another', () => {
    expect(cal.subtract(-2, -2)).not.toEqual(-2);
  });

  it('subtract a number from another', () => {
    expect(cal.subtract(-4, -3)).not.toEqual(1);
  });
});

describe('Calculator', () => {
  const cal = new Calculator();
  it('divides a number from another', () => {
    expect(cal.divide(6, 2)).toEqual(3);
  });

  it('divides a number from another', () => {
    expect(cal.divide(15, 3)).toEqual(5);
  });

  it('divides a number from another', () => {
    expect(cal.divide(-10, 5)).not.toEqual(3);
  });

  it('divides a number from another', () => {
    expect(cal.divide(9, -3)).not.toEqual(3);
  });
});

describe('Calculator', () => {
  const cal = new Calculator();
  it('get the product two numbers', () => {
    expect(cal.product(10, 3)).toEqual(30);
  });

  it('get the product two numbers', () => {
    expect(cal.product(7, 7)).toEqual(49);
  });

  it('get the product two numbers', () => {
    expect(cal.product(-12, 4)).not.toEqual(48);
  });

  it('get the product two numbers', () => {
    expect(cal.product(-6, -12)).not.toEqual(-72);
  });
});
