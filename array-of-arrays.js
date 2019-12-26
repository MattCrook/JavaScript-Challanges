// Flatten an array of arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];

// ES2019 solution
arrays.flat();    // set depth parameter inside .flat() method

// Recursion
function flatten(arrays) {
  return arrays.reduce((acc, val) => {
    return acc.concat(val);
  }, []);
}
flatten(arrays);
// [1, 2, 3, 4, 5, 6];


// Working with a huge array, the fastest solution would be:
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
flatten(arrays);
// [1, 2, 3, 4, 5, 6];
