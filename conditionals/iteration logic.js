/*
Using Conditions in Iteration Logic:
Now you're going to iterate over a collection of things, but you're also going to use a condition inside the loop to only run some some logic when the item has met certain conditions.

Instructions

Make sure every family member gets a full plate of food. You should produce output   in the console for each food, and for every family member.
You put Shrimp on Sean's place.
You should also pour wine for the adults at the table. Once you have placed all of the food on the person's plate, check if they are 21 years old, or more, and pour them a glass of wine.
*/

const family = [
    { name: "Garrett", age: 7 },
    { name: "Kristin", age: 32 },
    { name: "Courtney", age: 12 },
    { name: "Sean", age: 37 }
];
const meal = ["Quinoa", "Kale", "Sweet potatoes", "Shrimp", "Grits"];

  for (const {name, age} of family) {
      for (i = 0; i < meal.length; i++) {
      console.log(`You put ${meal[i]} on ${name}'s plate.`);
      } if (age >= 21) {
      console.log(`You pour wine for ${name}.`);
     }
   }
   
/* Alternate Solution

for (person of family) {
    for (food of meal) {
        console.log(`You put ${food} on ${person.name}'s plate.`);
    }
    if (person.age >= 21) {
        console.log(`You pour wine for ${person.name}.`);
    }
}
*/
