/*
  You and your friends are on vacation, and the group has come to a decision about
  how to decide where to eat every night, given certain conditions.
  
  If it is raining, too windy, or too cold, you will stay at your house and make dinner, but only
  if you have enough vegetables, because Becky is a vegetarian. If there aren't enough vegetables
  then you will go to the diner around the corner.
  
  If it is either sunny or overcast, then you will go to a local seafood restaurant. Unless 
  Susan is with you. Susan hates seafood. Thanks, Susan. We'll just have to eat at a pizza place.
  
  Starting you off with the current conditions today.
*/
const weatherCondition = "windy";
const weHaveVegetables = false;
const susanIsComing = true;
let whereWeWillEat = ""; // Final value determine by your logic

switch (weatherCondition) {
  case "raining":
  case "windy":
  case "cold":
    if (weHaveVegetables) {
      whereWeWillEat = "home";
    } else {
      whereWeWillEat = "diner";
    }
    break;
    
  case "sunny":
  case "overcast":
    if (susanIsComing) {
      whereWeWillEat = "pizza restaurant";
    } else {
      whereWeWillEat = "seafood restaurant";
    }
}

/*
  Possible values are:
    1. "house"
    2. "diner"
    3. "seafood restaurant"
    4. "pizza restaurant"
*/
console.log(whereWeWillEat);
