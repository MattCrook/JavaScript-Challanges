// Flatten an array of arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];

// ES2019 solution
arrays.flat(3);    // set depth parameter inside .flat() method


// functional solution
console.log(arrays.reduce((flat, current) => flat.concat(current), []));


// Recursion
function flatten(arrays) {
  return arrays.reduce((acc, val) => {
    return acc.concat(val);
  }, []);
}
flatten(arrays);  // [1, 2, 3, 4, 5, 6];


// Another way to write using recursion and .reduce() method using arrow function syntax
const flatArray = arrays.reduce((flat, current) => {
    return flat.concat(current);
    }, []);

console.log(flatArray);  // [1,2,3,4,5,6]


// Working with a huge array, the fastest solution might be:
let arrays = [[1, 2, 3], [4, 5], [6]];
const flatten = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};
flatten(arrays);  // [1, 2, 3, 4, 5, 6];


