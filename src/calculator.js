#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Performs addition
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Performs subtraction
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Performs multiplication
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Performs division
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Quotient of a and b
 * @throws {Error} If dividing by zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Calculates the result based on the operation
 * @param {number} a - First operand
 * @param {string} operation - The operation to perform (+, -, *, /)
 * @param {number} b - Second operand
 * @returns {number} The result of the operation
 */
function calculate(a, operation, b) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

function displayMenu() {
  console.log('\n--- CLI Calculator ---');
  console.log('Supported Operations:');
  console.log('  + : Addition');
  console.log('  - : Subtraction');
  console.log('  * : Multiplication');
  console.log('  / : Division');
  console.log('  exit : Quit the calculator\n');
}

function askForCalculation() {
  rl.question('Enter calculation (e.g., 10 + 5) or "exit": ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    try {
      const matches = input.match(/(-?\d+\.?\d*)\s*([+\-*/])\s*(-?\d+\.?\d*)/);
      if (!matches) {
        console.log('Invalid format. Please use: number operation number (e.g., 10 + 5)');
        askForCalculation();
        return;
      }

      const a = parseFloat(matches[1]);
      const operation = matches[2];
      const b = parseFloat(matches[3]);

      const result = calculate(a, operation, b);
      console.log(`Result: ${a} ${operation} ${b} = ${result}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }

    askForCalculation();
  });
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};

// Run CLI only if this is the main module
if (require.main === module) {
  displayMenu();
  askForCalculation();
}
