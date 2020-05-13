// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
return  drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

let createFareMultiplier = function(num1){
return function createFareMultiplier(num2){
 return  num2 * num1
}
}
 
 let fareDoubler = createFareMultiplier(2)

 let fareTripler = createFareMultiplier(3)

 const selectDifferentDrivers = (drivers, whichDriver) => {
 
 return  whichDriver(drivers);

 }

 


 