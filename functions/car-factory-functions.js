/*Practice: Automated Minivan Manufacturing with Functions

You need to simulate how a minivan gets manufactured. Modern manufacturing is largely automated, and as the vehicle and parts move down the assembly line, there are 6 stations which assemble different parts of the vehicle.

Chassis Station
Engine Station
Suspension Station
Exhaust Station
Body Station
Interior Station

Chassis Station
Define an addChassis function that generates an object with a property of  chassis and its value should be "Minivan" . This function should take no arguments, and should return the object.

Engine Station
Define an addEngine function that accepts an object as a parameter. You should verify that the object has a chassis property using the prop in object operator.

This function should add a new property to the incoming object named engine and its value should be "V6" . The function should then return the object.

Suspension Station
Define an addSuspension function that accepts an object as a parameter. You should verify that the object has a chassis property, and an engine property. This function should add a new property named suspension and its value should be "independent" . The function should return the object.

Exhaust Station
Define an addExhaust function that accepts an object as a parameter. You should verify that the object has a chassis property, an engine property, and a suspension property. This function should add a new property named exhaust and its value should be "dual side exhaust" . The function should return the object.

Body Station
Define an addBody function that accepts an object as a parameter. You should verify that the object has a chassis property, an engine property, a suspension property, and an exhaust property. This function should add a new property named body and its value should be "minivan" . The function should return the object.

Interior Station
Define an addInterior function that accepts an object as a parameter. You should verify that the object has a chassis property, an engine property, a suspension property, and a body property. This function should add a new property named interior and its value should be "leather" . The function should return the object.

After the minivan object has been completed, output the final object to the console.
*/

function addChassis() {
  const minivan = {chassis: "Minivan"};  // could just return the object
  return minivan;
}

function addEngine(obj) {
  if ("chassis" in obj) {
    obj.engine = "V6"
  }
  return obj;
}

function addSuspension(obj) {
  if (("chassis" in obj) && 
  		("engine" in obj)) {
    obj.suspension = "independent";
  }
  return obj;
}

function addExhaust(obj) {
  if (("chassis" in obj) && 
  	  ("engine" in obj) &&
      ("suspension" in obj)) {
      obj.exhaust = "dual side exhaust";
   }
   return obj;
}
 
function addBody(obj) {
  if (("chassis" in obj) && 
  	  ("engine" in obj) &&
      ("suspension" in obj) &&
      ("exhaust" in obj)) {
      obj.body = "minivan";
   }
   return obj;
}

function addInterior(obj) {
  if (("chassis" in obj) && 
  	  ("engine" in obj) &&
      ("suspension" in obj) &&
      ("exhaust" in obj) &&
      ("body" in obj)) {
      obj.interior = "leather";
   }
   return obj;
}

const newCar = addChassis();
addEngine(newCar)
addSuspension(newCar)
addExhaust(newCar)
addBody(newCar)
addInterior(newCar);


console.log(newCar);

/*
Second way to do it:

const addChassis = () => {
  return {
    chassis: "Minivan"
  }
}

const addEngine = (minivan) => {
  if ("chassis" in minivan) {
    minivan.engine = "V6"
    return minivan
  }
}

const addSuspension = (minivan) => {
  if (
    "chassis" in minivan &&
    "engine" in minivan
  ) {
    minivan.suspension = "independent"
    return minivan
  }
}

const addExhaust = (minivan) => {
  if (
    "chassis" in minivan &&
    "engine" in minivan &&
    "suspension" in minivan
  ) {
    minivan.exhaust = "dual side exhaust"
    return minivan
  }
}

const addBody = (minivan) => {
  if (
    "chassis" in minivan &&
    "engine" in minivan &&
    "suspension" in minivan &&
    "exhaust" in minivan
  ) {
    minivan.body = "minivan"
    return minivan
  }
}

const addInterior = (minivan) => {
  if (
    "chassis" in minivan &&
    "engine" in minivan &&
    "suspension" in minivan &&
    "exhaust" in minivan &&
    "body" in minivan
  ) {
    minivan.interior = "leather"
    return minivan
  }
}



// Invoke each one in the right order to move down the assembly line
let caravan = addChassis()
caravan = addEngine(caravan)
caravan = addSuspension(caravan)
caravan = addExhaust(caravan)
caravan = addBody(caravan)
caravan = addInterior(caravan)


console.log(caravan)
*/
