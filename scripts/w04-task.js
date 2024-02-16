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
    place: "Protea North",
    length:" 12 years",

};
myProfile.placesLived.push(

{ place: "Protea Glen", length: "3 years" },
    { place: "Soweto", length: "2 years" },
    { place: "Sandton", length: "1 year" },
);



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





