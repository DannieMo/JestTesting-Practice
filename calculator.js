class Calculator {
  constructor() {
    this.history = [];
  }

  add = (a, b) => a + b;

  subtract = (a, b) => a - b;

  product = (a, b) => a * b;

  divide = (a, b) => a / b;
}

module.exports = Calculator;
