function min(arg1, arg2) {
return Math.min(arg1, arg2);
}
console.log(min(2, 5));
// find min...2

function secondMin(a, b) {
  if (a < b) {
    return a;
  } else {
   return b;
  }
}
console.log(secondMin(2, 5));
// 2

function isEven (n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
  }
  console.log(isEven(75));
  
  
  /*
  function countBs(string) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
  if (string[i].toUpperCase === true) {
  return counted += 1;
      }
    }
  }
  console.log(countBs("BBc"));
  
  
  function countBs(string) {
  	let counter = 0;
      for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
          counter++;
        }
     }
     return counter;
  }
console.log("countBs 1: ", countBs("BBC"));
console.log("countBs 2: ", countBs("bbc"));
*/
 
  function countChar(string, ch) {
    let counted = 0;
  	for (let i = 0; i < string.length; i++) {
      if (string[i] === ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log("countBs: ", countBs("BBc"));
  console.log("countChar: ", countChar("kakkerlak", "k"));
  // countBs: 2
  // countChar: 4
  
  
  let arrays = [[1, 2, 3], [4, 5], [6]];
//  console.log(arrays.reduce((flat, current) => flat.concat(current), []));
  
  const flatArray = arrays.reduce((flat, current) => {
    return flat.concat(current);
    }, []);
  console.log(flatArray);  // [1,2,3,4,5,6]
  
  
  function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1); 
  }
  }
  console.log(factorial(3)); // 6
  
  function spacify(word) {  
  return word.split('').join(' ');
}
console.log(spacify("matt"));

String.prototype.spacify = String.spacify || function() {
  return this.split('').join(' ');
};
// if String.spacify exists use that, otherwise use this function we are defining. Called a polyfill. 
  


function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}
console.log(every([1, 2, 3], n => n < 10)); // true

function every2(array, test) {
  return !array.some(element => !test(element));
}
console.log(every2([2, 3, 4], n => n < 10)); // true

var User = {
  count: 1,

  getCount: function() {
    return this.count;
  }
};
console.log(User.count);
