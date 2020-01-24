/*
Your job in this exercise is to pass multiple arguments of different types to a function, and then use those three separate pieces of data to construct a string. You will define a function that will define the following three parameters.

Object representing an instructor
Object representing a student
A string name of an exercise

The function should extract the instructor's name from the first object, and the student's name from the second object. It should also use the third parameter to build the final string. Here's what the return value of the function should look like.

"Nathan Gonzalez assigned the Solar System exercise to Mo Silvera"

The function should only return that string, and nothing else. It should be a pure function.

The return value should be stored in a variable, and then pass that variable to the console.log() method to output in. The sample code gives you some initial objects to work with. You be as creative as you want for your exercise names.
*/


const zoe = {
  instructor: true,
  student: false,
  firstName: "Zoe",
  lastName: "Ames"
}

const nathan = {
  instructor: true,
  student: false,
  firstName: "Nathan",
  lastName: "Gonzalez"
}

const mo = {
  instructor: false,
  student: true,
  firstName: "Mo",
  lastName: "Silvera"
}

const lissa = {
  instructor: false,
  student: true,
  firstName: "Lissa",
  lastName: "Goforth"
}




/* 
  Define a function with three parameters in the following order
     1. An instructor object
     2. A student object
     3. A string name of an exercise
     
  The purpose of this function is return a string in the following format:
    "Zoe Ames assigned the Overly Excited exercise to Lissa Goforth"
*/
const assignExercise = (instructorObj, studentObj, exerciseString) => {
  let instructor = `${instructorObj.firstName} ${instructorObj.lastName}`;
  let student = `${studentObj.firstName} ${studentObj.lastName}`;
  return `${instructor} assigned the ${exerciseString} exercise to ${student}`;
};

assignExercise(zoe, mo, "pushups");

myString = assignExercise(zoe, mo, "pushups");

console.log(myString);

/*
const assignExercise = (instructor, student, exercise) => {
  return `${instructor.firstName} ${instructor.lastName} assigned the ${exercise} exercise to ${student.firstName} ${student.lastName}`
}

const assignment = assignExercise(zoe, lissa, "Rainbow Reindeer")

console.log(assignment)
*/
