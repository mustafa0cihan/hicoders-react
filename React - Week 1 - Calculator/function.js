/**Function definition */

function add(p1, p2) {
    return `The result of the addition: ${p1 + p2}`
}

function subtract(p1, p2) {
    return `The result of subtraction: ${p1 - p2}`
}

function multiply(p1, p2) {
    return `The result of the multiplication: ${p1 * p2}`
}

function divide(p1, p2) {
    return `The result of division: ${Math.round(p1 / p2)}`
}

/**Export Operation */
module.exports = {
    additionalOperation: add,
    subtractOperation: subtract,
    multiplyOperation: multiply,
    divideOperation: divide
}