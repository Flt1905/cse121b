/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
return number1 + number2};

let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#Sum').value = add(addNumber1, addNumber2);
document.querySelector('#addNumbers').addEventListener('click , addNumbers);



/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
return number1 - number2};

let subtractNumber1 = Number(document.querySelector('#subtract1').value);
let subtractNumber2 = Number(document.querySelector('#subtract2').value);
document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
document.querySelector('#subtractNumbers').addEventListener('click , subtractNumbers);

/* Arrow Function - -Multiply Numbers */
 multiply= function (Number1, Number2){
return Number1 * Number2};

multiply =() => {return (Number1 * Number2)};
    
let Number1 = Number(document.querySelector('#factor1').value);
let Number2 = Number(document.querySelector('#factor2').value);
document.querySelector('#product').value = multiply(Number1, Number2);
document.querySelector('#multiplyNumbers').addEventListener('click , multiplyNumbers);


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
