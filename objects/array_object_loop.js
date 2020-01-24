/*
  Given the array of objects below, use `console.log()` so that the following
  output is generated
  
  Skipbo is a Weinereimer
  Jenkins is a Caarolina Retriever
  Dodge is a Pug
  Fizbo is a Mutt
  Angus is a Australian Shepherd
*/

const dogs = [
    { name: "Skipbo", breed: "Weinereimer" },
    { name: "Jenkins", breed: "Caarolina Retriever" },
    { name: "Dodge", breed: "Pug" },
    { name: "Fizbo", breed: "Mutt" },
    { name: "Angus", breed: "Australian Shepherd" }
]

for (i = 0; i < dogs.length; i++) {
  const dog = dogs[i];
  const name = dog.name;
  const breed = dog.breed;
  console.log(`${name} is a ${breed}`);
}
/* using for...of loop:

for (const dog of dogs) {
  const name = dog.name;
  const breed = dog.breed;
  console.log(`${name} is a ${breed}`);
}

object destructuring:

for (const {name, breed} of dogs) {
  console.log(`${name} is a ${breed}`);
}
*/
