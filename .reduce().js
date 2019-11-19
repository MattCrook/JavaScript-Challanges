const numbers = [2, 5, 6, 8];

const newSum = numbers.reduce((accumulator, currentValue) => {
  console.log('The value of the accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
});
console.log(newSum); // 21

/* adding in third parameter: 10
const newSum = numbers.reduce((accumulator, currentValue) => {
  console.log('The value of the accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); 
// output 31
