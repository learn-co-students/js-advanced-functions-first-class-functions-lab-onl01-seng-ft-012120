// Code your solution in this file!
// return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};
//return an array of the last two drivers 
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value;
    };
};
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
}