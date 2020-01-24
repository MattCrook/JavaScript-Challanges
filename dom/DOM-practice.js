// INTRODUCTORY EXERCISES 

// Use document.querySelector to grab a reference to the div with an id of "name" (and store it in a variable!)
/*
const nameDiv = document.getElementById('name');
console.log('nameDiv', nameDiv);
*/
const nameDiv = document.querySelector('#name');
console.log("nameDiv", nameDiv);


// Use the innerHTML property to print your name into the container div! You should see your name in the DOM.

const containerDiv = document.querySelector("#container");
console.log("containerDiv", containerDiv);

containerDiv.innerHTML = 'Matt';



// Use document.createElement to create a new div element and store it in a variable

const divElement = document.createElement('div');
console.log('divElement', divElement);

// Use the innerHTML property to print your favorite food into the div you just created. You shouldn't see it in the DOM yet- that's okay! 
const favFood = 'Pizza';

divElement.innerHTML = favFood;


// Use appendChild to append your new favorite food div to the div with an id of "name". Now you should see your favorite food in the DOM, right below the name!
nameDiv.appendChild(divElement);


// If you finish with these exercises early, try using document.createElement to create things other than divs. Can you create an H1 tag? How about a paragraph? Try setting their innerHTML the same way!

const articleElement = document.createElement('article');
articleElement.innerHTML = 'This is an article.';
document.querySelector('body').appendChild(articleElement);



// CHALLENGE EXERCISES

// Loop over the following array:
const  muppets = ["Fozzie Bear", "Kermit the Frog", "Ms. Piggy"];

// For each item in the array, create a new <li> element and append it to the <ul> element with the id of "container"
// First, grab a reference to the list container that's already in the DOM
// You should see a bulletted list of muppet names in the DOM!
const listContainer = document.querySelector('#list');
const listElement = document.createElement('ul');
for (let i = 0; i < muppets.length; i++) {
			const muppetName = muppets[i];
      console.log('muppetName', muppetName);
      const bulletPointElement = document.createElement('li');
      bulletPointElement.innerHTML= muppetName;
      
      listElement.appendChild(bulletPointElement);
}

listContainer.appendChild(listElement);



// BONUS CHALLENGE: 
// Use JavaScript to create a resume for Fozzie Bear. 
// Create an <h1> element and set the innerHTML as Fozzie's name.
// Create an <h3> element and set the innerHTML for his tagline
// Create a <p> element and set the innerHTML for his signature signatureMove
// Loop through fozzie's hobbies and print each one to the dom as an unordered list
// create a paragraph element and set the innerHTML to the sentence "Fozzie is constantly heckled by <insert greatest critics here>, but luckily his friend <insert biggest fan here> is always there to cheer him up."

var fozzie = {
  name: "Fozzie Bear",
  tagline: "Wokka wokka!",
  signatureMove: "Ear wiggle",
  hobbies: ["Hilarious jokes", "Throwing pies at people", "John Wayne impressions"],
  biggestFan: "Gonzo the Great",
  greatestCritics: ["Statler", "Waldorf"]
} 

// dir(document)
const fozzieContainer = document.getElementById('fozzie');
const headerElement = document.createElement('h1');
headerElement.innerHTML = fozzie.name;
fozzieContainer.appendChild(headerElement);


const smallerHeaderElement = document.createElement('h3');
smallerHeaderElement.innerHTML = fozzie.tagline;
fozzieContainer.appendChild(smallerHeaderElement);

const paragraphElement = document.createElement('p');
paragraphElement.innerHTML = fozzie.signatureMove;
fozzieContainer.appendChild(paragraphElement);
// First, grab a reference to our container div

// Create an <h1> element

// Set the innerHTML to fozzie's name

// Append it to the fozzieContainer 



// Create an <h3> element and set the innerHTML for his tagline


// Create a <p> element and set the innerHTML for his signature signatureMove


// Loop through fozzie's hobbies and print each one to the dom as an unordered list
// First, create a <ul> element outside the loop.
const hobbyListContainer = document.createElement('ol');
for (let i = 0; i < fozzie.hobbies.length; i++) {
const hobby = fozzie.hobbies[i];
const hobbyBulletPoint  = document.createElement('li');
hobbyBulletPoint.innerHTML = hobby;
hobbyListContainer.appendChild(hobbyBulletPoint);
}

fozzieContainer.appendChild(hobbyListContainer);




// **We need to create this outside the loop because we only want one <ul> element-- it's going to be our list container. We need to create the <li> elements inside the loop because we want one <li> element for each item in the array.

// We can get to the array of hobbies with dot notation, the same way we would get to Fozzie's name or tagline. Try logging the array to the console! It works, I promise!

// This should look just like a normal array, which means we can loop over fozzie.hobbies just like we did with the muppets array in the first challenge!



// Finally, now that we've appended all of our hobbies to our hobbies list, let's put our hobbies list in the DOM!


// create a paragraph element and set the innerHTML to the sentence "Fozzie is constantly heckled by <insert greatest critics here>, but luckily his friend <insert biggest fan here> is always there to cheer him up."

// We need to grab Statler and Waldorf's names out of the Fozzie object. But wait! Their names are stored in an array! How do we access items out of an array? We could use a loop, and it's fine if you did, but for these purposes I just used square bracket notation to grab the first and second items out of the fozzie.greatestCritics array. Remember that arrays are zero-indexed, so fozzie.greatestCritics[0] is the first item in the array ("Statler"), and fozzie.greatestCritics[1] is the second item in the array ("Waldorf").
