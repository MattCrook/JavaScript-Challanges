/*
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

** HintYour function will need a loop that looks at every character in the string. It can run an index from zero to one below its length (< string.length). If the character at the current position is the same as the one the function is looking for, it adds 1 to a counter variable. Once the loop has finished, the counter can be returned.

Take care to make all the bindings used in the function local to the function by properly declaring them with the let or const keyword.
*/

// checking to count uppercase B.
function countBs(string) {
  let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "B") {
        counter++;
      }
   }
   return counter;
}
console.log("countBs 1: ", countBs("BBC")); //  countBs 1: 2
console.log("countBs 2: ", countBs("bbc")); //  countBs 2: 0

// Adding new argument checking characters 
function countChar(string, ch) {
  let counted = 0;
	  for (i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
// Rewriting countBs function to use countChar function:
function countBs(string) {
  return countChar(string, "B");
}

  console.log("countBs: ", countBs("BBc"));  // countBs: 2
  console.log("countChar: ", countChar("kakkerlak", "k"));  // countChar: 4
  