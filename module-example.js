let Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane;



const Airplane = require('./1-airplane.js');
function displayAirplane() {
  console.log(Airplane.myAirplane);
}
displayAirplane();



let Airplane = {};

module.exports = {
  myAirplane: "CloudJet", 
  displayAirplane: function() {
    return this.myAirplane;
  }
};



const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());


export let availableAirplanes = [
{name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length > requiredStaff) {
    return true;
  } else {
    return false;
  }
};
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
};



import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}
displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}
displaySpeedRangeStatus();






// or export using variable alias and keyword "as"
let availableAirplanes = [
    {name: 'AeroJet',
     fuelCapacity: 800,
     availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
     maxSpeed: 1200,
     minSpeed: 300
    }, 
    {name: 'SkyJet',
     fuelCapacity: 500,
     availableStaff: ['pilots', 'flightAttendants'],
     maxSpeed: 800,
     minSpeed: 200
    }
    ];
    
    let flightRequirements = {
      requiredStaff: 4,
      requiredSpeedRange: 700
    };
    
    function meetsStaffRequirements(availableStaff, requiredStaff) {
      if (availableStaff.length >= requiredStaff) {
        return true;
      } else {
        return false;
      }
    };
    
    function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
      let range = maxSpeed - minSpeed;
      if (range > requiredSpeedRange) {
        return true;
        } else {
        return false;
      }
    };
export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };
