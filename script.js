let display = document.getElementById('display');
let firstNumber = '';
let operator = '';
let secondNumber = '';

function appendNumber(number) {
  display.value += number;
}

function appendDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function setOperator(op) {
  if (firstNumber === '') {
    firstNumber = display.value;
    operator = op;
    display.value = '';
  } else {
    calculate();
    operator = op;
  }
}

function toggleSign() {
  display.value = parseFloat(display.value) * -1;
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function clear() {
  display.value = '';
  firstNumber = '';
  operator = '';
  secondNumber = '';
}

function calculate() {
  if (firstNumber !== '' && operator !== '' && display.value !== '') {
    secondNumber = display.value;
    let result;
    switch (operator) {
      case '+':
        result = add(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '-':
        result = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '*':
        result = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '/':
        if (parseFloat(secondNumber) === 0) {
          display.value = 'Error: Divide by zero';
          clear();
          return;
        }
        result = divide(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '%':
        result = percentage(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
    }
    display.value = roundResult(result);
    firstNumber = result.toString();
    operator = '';
    secondNumber = '';
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function percentage(a, b) {
  return (a * b) / 100;
}

function roundResult(result) {
  return Math.round(result * 100) / 100;
}
