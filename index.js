// Code your solution in this file!

const returnFirstTwoDrivers = function (driver) {
  return driver.slice(0, 2);
};

const returnLastTwoDrivers = function (driver) {
  return driver.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multVal) {
  return function (fareVal) {
    return multVal * fareVal;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function (arrayOfDrivers, func) {
  return func(arrayOfDrivers);
};