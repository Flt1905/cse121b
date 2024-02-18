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
    
    // Declare and instantiate an array variable to hold the numbers 1 through 13
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Assign the value of the array variable to the HTML element with an ID of array
document.getElementById('array').textContent = numbersArray.join(', ');

// Use the filter() array method to find all of the odd numbers
const oddNumbers = numbersArray.filter(num => num % 2 !== 0);

// Assign the result to the HTML element with an ID of odds
document.getElementById('odds').textContent = oddNumbers.join(', ');

// Use the filter() array method to find all of the even numbers
const evenNumbers = numbersArray.filter(num => num % 2 === 0);

// Assign the result to the HTML element with an ID of evens
document.getElementById('evens').textContent = evenNumbers.join(', ');

// Use the reduce() array method to sum the array variable elements
const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);

// Assign the result to the HTML element with an ID of sumOfArray
document.getElementById('sumOfArray').textContent = sumOfArray;

// Use the map() array method to multiply each element in the array variable by 2
const multiplied = numbersArray.map(num => num * 2);

// Assign the result to the HTML element with an ID of multiplied
document.getElementById('multiplied').textContent = multiplied.join(', ');

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two
const sumOfMultiplied = multiplied.reduce((acc, curr) => acc + curr, 0);

// Assign the result to the HTML element with an ID of sumOfMultiplied
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;

});