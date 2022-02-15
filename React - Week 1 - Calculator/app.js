/**
 * 1) 4 functions are defined for 4 arithmetic operations in function.js
 * 2) Arithmetic functions in function.js are exported with the "module.exports" method.
 * 3) Functions are imported into app.js with the require method.
 * 4) Two values are assigned to variables named firstNumber and secondNumber.
 * 5) The result of the operations is printed to the console.
 */

const calculator = require("./function");

const firstNumber = 12;
const secondNumber = 3;

/**Additional Operation */
console.log(calculator.additionalOperation(firstNumber, secondNumber))
/**Subtract Operation */
console.log(calculator.subtractOperation(firstNumber, secondNumber))
/**Multiply Operation */
console.log(calculator.multiplyOperation(firstNumber, secondNumber))
/**Divide Operation */
console.log(calculator.divideOperation(firstNumber, secondNumber))