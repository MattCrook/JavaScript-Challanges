/*
Implement the bind method

*/

const User = {
  count: 1,

  getCount: function() {
    return this.count;
  }
};

//console.log(User.getCount()); // 1

//var func = User.getCount;
//console.log(func()); // undefined

const User = {
  count: 1,

  getCount: function() {
    return this.count;
  }
};

Function.prototype.bind = function(context) {
  let self = this;
  
  return function() {
    return self.apply(context, arguments);
  };
};

const func = User.getCount.bind(User);
console.log(func());
