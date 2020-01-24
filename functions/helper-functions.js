/*
Functions Invoking other Functions
You task in this exercise is to write three functions.

1. mealMaker
2. slice
3. cook

The mealMaker function should accept an array of objects. Each object in the array should represent a food item. Each should have a food and a type key. The type key should have one of two values: meat or vegetable. 

{
  "food": "beef",
  "type": "meat"
}

or 

{
  "food": "zucchini",
  "type": "vegetable"
}

The mealMaker function should iterate the array. Determine if each object in the array represents a meat or a vegetable. If it is a meat, the cook function should be invoked and the object sent as an argument. If it represents a vegetable, then the slice function should be invoked and the object sent as an argument.
The cook function should return the string "Cooked beef" if the argument's value is "beef" for example. 
The slice function should return the string "Beet slices" if the argument's value is "beet for example. 
The mealMaker function should return a new array that contains the strings representing the prepared food. For example, if the original contains the objects above, the final array returned by the function should be the following.

["Cooked beef", "Zucchini slices"]
*/

const newArr = [];
const arrayOfFoodObjects = [
  {food: "chicken", type: "meat"},
  {food: "squash", type: "vegetable"},
  {food: "beef", type: "meat"},
  {food: "zucchini", type: "vegetable"}];

const cook = (food) => {
return `Cooked ${food}`  // returning a template string using the parameter as the argument. Remember, (food) is a parameter and local varibale that holds whatever value we pass to it and becomes an argument. 
  }

const slice = (food) => {
  const foodCapitalized = food.charAt(0).toUpperCase() + food.slice(1); // saving off a new varibale that takes the argument (food) and capitalizes the first letter, then adds the same string minus the first index of the string i.e the first letter. 
 return `${foodCapitalized} slices`
  }
  
const mealMaker = (arrayOfFoodObjects) => {         // using the original array as the parameter because we want to loop throught that array. 
  for (const element of arrayOfFoodObjects) {        // (element) holds itertor variable that is iterating the object. 
    let type = element.type;        // pulling the value of the property (type) off every iteration of objects and assignig to varibale for better readabilty.
       if (type === "meat") {
         let result = cook(element.food);        // Cooked "chicken". We are assigning the variable (result) the value of invoking the function (cook) with the argument of element.food. ( remember, element is our iterator variable, and we are accessing the food key to grab its value.)
         newArr.push(result)        // using the .push() method to push what the variable result holds to newArr. 
       } 
       if (type === "vegetable") {
         let result = slice(element.food);
         newArr.push(result)
       } 
     }
     return newArr;        // telling this function to return the newArr. Which will hold the template strings we created. 
   };
mealMaker(arrayOfFoodObjects);        //calling the function with the argument of the original array. 

// const myMeals = mealMaker(arrayOfFoodObjects);
// console.log(myMeals);
