/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
// Function declaration to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function declaration to subtract two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Function declaration to multiply two numbers
const multiply = (number1, number2) => {
    return number1 * number2;
};

// Function declaration to divide two numbers
const divide = function(number1, number2) {
    return number1 / number2;
};

// Function to get the values of two HTML form controls and perform addition
function addNumbers() {
    const number1 = parseFloat(document.getElementById('add1').value);
    const number2 = parseFloat(document.getElementById('add2').value);
    const sum = add(number1, number2);
    document.getElementById('sum').value = sum;
}

// Function to get the values of two HTML form controls and perform subtraction
function subtractNumbers() {
    const number1 = parseFloat(document.getElementById('subtract1').value);
    const number2 = parseFloat(document.getElementById('subtract2').value);
    const difference = subtract(number1, number2);
    document.getElementById('difference').value = difference;
}

// Function to get the values of two HTML form controls and perform multiplication
const multiplyNumbers = () => {
    const number1 = parseFloat(document.getElementById('factor1').value);
    const number2 = parseFloat(document.getElementById('factor2').value);
    const product = multiply(number1, number2);
    document.getElementById('product').value = product;
};

// Function to get the values of two HTML form controls and perform division
function divideNumbers() {
    const number1 = parseFloat(document.getElementById('dividend').value);
    const number2 = parseFloat(document.getElementById('divisor').value);
    const quotient = divide(number1, number2);
    document.getElementById('quotient').value = quotient;
}

// Event listener for addition button
document.getElementById('addNumbers').addEventListener('click', addNumbers);

// Event listener for subtraction button
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

// Event listener for multiplication button
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

// Event listener for division button
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

// Event listener for the Get Total Due button
document.getElementById('getTotal').addEventListener('click', function() {
    // Get the value entered by the user in the subtotal field
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    
    
});