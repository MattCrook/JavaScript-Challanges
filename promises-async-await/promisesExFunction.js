
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
const executorFunction = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
  };
const myFirstPromise = new Promise(executorFunction);
const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
  };
  // Write your code below:
const myExecutor = (resolve, reject) => {
if (inventory.sunglasses > 0) {
     resolve('Sunglasses order processed.');
   } else {
     reject('That item is sold out.');
   }
}
const orderSunglasses = () => {
 return new Promise(myExecutor);
}
const orderPromise = orderSunglasses();
console.log(orderPromise);

const returnPromiseFunction = () => {
return new Promise((resolve, reject) => {
     setTimeout(( ) => {resolve('I resolved!')}, 1000);
   });
 };

const prom = returnPromiseFunction();

const delayedHello = () => {
   console.log('Hi! This is an asynchronous greeting!');
 };
setTimeout(delayedHello, 2000);
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};

const prom = returnPromiseFunction();


// using then()
const prom = new Promise((resolve, reject) => {
    resolve('Yay!');
});
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
    console.log(rejectReason);
};

checkInventory(order)
    .then(handleSuccess, handleFailure);


//  then() and catch()
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
  prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });




//  library.js
  const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
  };
  
  const checkInventory = (order) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              let inStock = order.every(item => inventory[item[0]] >= item[1]);
              if (inStock) {
                  resolve(`Thank you. Your order was successful.`);
              } else {
                  reject(`We're sorry. Your order could not be completed because some items are sold out.`);
              }
          }, 1000);
      });
  };

  module.exports = {checkInventory};
// app.js
const {checkInventory} = require('./library.js');
const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure(err))
//  We're sorry. Your order could not be completed because some items are sold out.


let p = new Promise((resolve, reject) => {
    let a = 1 +2;
      if (a === 2) {
          resolve("right");
      } else {
          reject("wrong");
      }
});

p.then((message) => {
    console.log(`you got the ${message} answer.`);
}).catch((message) => {
    console.log(`you got the ${message} answer.`);
})
