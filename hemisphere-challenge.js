/*
Challenge: Global Weather Report
You are going to use the window.prompt() method to ask your customer three questions.

Which hemisphere do you live in, Northern or Southern?
What month is it?
What is the current temperature?
You are going to use conditionals to give your customer feedback based on the answers.

If the customer lives in the northern hemisphere, and the month is October, November,December, January, or March here is what you should tell the user for different temperature ranges.

Greater than 13, display "Global warming must be real"
Less than 13, but greater than -6, display "Can we go skiing today?"
Less than -6, display "So much for global warming."
If the customer lives in the northern hemisphere, and the month is April, May, June, July, August, or September here is what you should tell the user for different temperature ranges.

Greater than 35, display "I didn't know we lived on the Sun!"
Less than 35, but greater than 23, display "Let's go to the beach."
Less than -6, display "So much for global warming"
If the customer lives in the southern hemisphere, switch the months, but use the same messages for the temperature ranges. Example: The following statement will display a prompt to the user, and then the variable hemisphere will contain the string "Northern" or "Southern"
*/

const temperature = window.prompt("What is the current temperature?");
const hemisphere = window.prompt('Which hemisphere do you live in, Northern or Southern?');
const currentMonth = window.prompt('What month is it?');

switch (currentMonth) {
  case 'October':
  case 'November':
  case 'December':
  case 'January':
  case 'February':
  case 'March':
        if (temperature > 13 && hemisphere === 'Northern') {
          window.alert("Global warming must be real!");
        } else if ((temperature < 13) && (temperature > -6) && hemisphere === 'Northern') {
          window.alert("Can we go Skiing today?");
        } else if (temperature < -6 && hemisphere === 'Northern') {
          window.alert("So muuch for global warming.");
        } else if (temperature > 13 && hemisphere === "Southern") {
          window.alert("Global warming must be real.");
        } else if ((temperature < 13) && (temperature > -6) && hemisphere === "Southern") {
          window.alert("Can we go skiing today?");
        } else if (temperature < -6 && hemisphere === "Southern") {
          window.alert("So much for global warming.");
        }
     break;
   case 'April':
   case 'May':
   case 'June':
   case 'July':
   case 'August':
   case 'September':
      if (temperature > 35 && hemisphere === 'Northern') {
        window.alert("I didn't know we lived on the sun!");
      } else if ((temperature < 35) && (temperature> 23) && hemisphere === "Northern") {
        window.alert("Let's go to the beach.");
      } else if (temperature < -6 && hemisphere === 'Northern') { 
        window.alert("So much for global warming.");
      } else if (temperature > 13 && hemisphere === 'Southern') {
        window.alert("Global warming must be real.");
      } else if ((temperature < 13) && (temperature > -6) && hemisphere==='Southern') {
        window.alert("Can we go skiing today?");
      } else if (temperature < -6 && hemisphere === 'Southern') {
        window.alert('So much for global warming.');
      }
      break;
}
/*

Second way of doing it below:

const temperature = window.prompt("What is the current temperature?");
const currentMonth = window.prompt("What is the current month?");
const hemisphere = window.prompt("What is your current hemisphere?");

switch (currentMonth) {
  case "October":
  case "November":
  case "December":
  case "January":
  case "March":
    if (temperature > 13 && hemisphere === "Northern") {
      console.log("Global warming must be real.");
    } else if ((temperature < 13) && (temperature > -6) && hemisphere === "Northern") {
      console.log("Can we go skiing today?");
    } else if (temperature < -6 && hemisphere === "Northern") {
      console.log("So much for global warming.");
    }
    break;
  case "April":
  case "May":
  case "June":
  case "July":
  case "August":
  case "September":
    if (temperature > 35 && hemisphere === "Northern") {
      console.log("I didn't know we lived on the Sun!");
    } else if ((temperature < 35) && (temperature > 23) && hemisphere === "Northern") {
      console.log("Let's go to the beach.");
    } else if (temperature < -6 && hemisphere === "Northern") {
      console.log("So much for global warming.");
    }
    break;
  case "April":
  case "May":
  case "June":
  case "July":
  case "August":
  case "September":
    if (temperature > 13 && hemisphere === "Southern") {
      console.log("Global warming must be real.");
    } else if ((temperature < 13) && (temperature > -6) && hemisphere === "Southern") {
      console.log("Can we go skiing today?");
    } else if (temperature < -6 && hemisphere === "Southern") {
      console.log("So much for global warming.");
    }
    break;    
  case "October":
  case "November":
  case "December":
  case "January":
  case "March":
    if (temperature > 13 && hemisphere === "Southern") {
      console.log("Global warming must be real.");
    } else if ((temperature < 13) && (temperature > -6) && hemisphere === "Southern") {
      console.log("Can we go skiing today?");
    } else if (temperature < -6 && hemisphere === "Southern") {
      console.log("So much for global warming.");
    }
    break;
}
/*
