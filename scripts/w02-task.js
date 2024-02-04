/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Fulu Tshilande";

const currentYear = new Date().getFullYear();
/*console.log(currentYear);*/

const profilePicture = "images/profile.webp";



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');

// /* Step 4 - Adding Content */

nameElement.innerHTML = fullName
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}`);

/* Step 5 - Array */

let  lovedFoods = ['fruits', 'Cheese','rice','Meat'];


foodElement.innerHTML = lovedFoods;
let newfood = 'orange'
lovedFoods.push(newfood);
foodElement.innerHTML+= `<br>${lovedFoods}`
// console.log (food);




