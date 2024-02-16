/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {name: "Fulu Tshilande",
    photo:"images/profile.webp",
    favoriteFoods: ["Fruits", "Vegetables", "Milk","Cheese","Pizza"],
    hobbies: ["soccer","chess","ministering"],
    placesLived:[]

}



/* Populate Profile Object with placesLive objects */


let newPlace = {
    place: "proteaNorth",
    length:" 12 years"

};
myProfile.placesLived.push(newPlace);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */



myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
  });





console.log(myProfile.favoriteFoods[3])
console.log(myProfile.placesLived)