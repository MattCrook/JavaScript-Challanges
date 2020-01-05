/*
The base case is the case when the function stops calling itself and returns some value which stops its recurring operation
The recursive case is the case in which the function keeps calling itself until the base case is arrived. So in the case of a countdown, if the countdown starts from 5, the function calls itself when the value of counter variable(denoted by n in our case) is 5, 4, 3 and 2 but as soon as the value is 1, it returns.
The function call at the else statement simply decreases the value of n and calls the function itself
If you look at the code the else statement is absolutely unnecessary because if the value of n is 1 it returns and if it's not the code below executes. So, if it's not one it will execute the codes below. So, we can refactor it as
*/


function countDownFrom(n) {
  console.log(n);
    if (n == 1) 
      return 
    };
countDownFrom(3); // 3, 2, 1
