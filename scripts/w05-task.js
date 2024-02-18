/* Declare and initialize global variables */

// Declare a const variable named templesElement
const templesElement = document.querySelector("#temples");

// Declare a global empty array variable to store a list of temples named templeList
let templeList = [];

/* async displayTemples Function */

// Define a function to display only the temple names and images
const displayTemples = (temples) => {
  templesElement.innerHTML = ''; // Clear the existing content

  temples.forEach(temple => {
    const article = document.createElement('article');                
    const templeName = document.createElement('h3');
    templeName.textContent = temple.templeName;
    const img = document.createElement('img');
    img.setAttribute('src',temple.imageUrl);
    img.setAttribute('alt', temple.location);
   
    article.appendChild(templeName);
    article.appendChild(img);

    templesElement.appendChild(article);  
  });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {

 const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    templeList = await response.json();
    displayTemples(templeList); // Display the temples after fetching data
  
  };

/* reset Function */
let reset = ()=> {      
    templesElement.innerHTML ='';    
}
/* sortBy Function */
const sortBy = (temples) => {    
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
      case "utah":
                    displayTemples(temples.filter((temple)=>temple.location.includes("Utah")));
                    break;
      case "notutah":    
                    displayTemples(temples.filter((temple)=>!temple.location.includes("Utah")));
                    break;
      case "older":  //Built Before 1950 // "dedicated": "1884, May, 17",                    
                    let fecha0 = new Date(1950,0,1);
                    displayTemples(temples.filter((temple)=>fecha0 > new Date(temple.dedicated)));                    
                    break;
     case "all":  
                    displayTemples(temples);
                    break;                                              
    }
}
getTemples();
    /* Event Listener */
document.querySelector('#sortBy').addEventListener('change',() => sortBy(templeList));