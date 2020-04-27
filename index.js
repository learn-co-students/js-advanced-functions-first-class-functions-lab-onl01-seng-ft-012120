// Code your solution in this file!
// const returnFirstTwoDrivers = function(drivers) {
//      return [drivers[0], drivers[1]]
// }

// const returnFirstTwoDrivers = function(a, b, ...drivers) {
//     console.log(`a is ${a}, b is ${b} drivers is ${drivers}`);
// }
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = (int) => {
//     return (fare) => { return int * fare};
// }

const createFareMultiplier = function (multiplyValue) {
    // console.log(`multiplyValue 1 step is ${multiplyValue}`);
    return function(fare) {
        // console.log(`multiplyValue 2 step is ${multiplyValue}, fare is ${fare}`);
        return fare * multiplyValue;
    };
}

// createFareMultiplier(1)(2);

const fareDoubler = createFareMultiplier(2);
// const fareDoubler = (fare) => {
//     return createFareMultiplier(2)(fare);
//   }

const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = (arr, funct) => {return funct(arr);}

const selectDifferentDrivers = function(arr, funct) {
    console.log(`arr is ${arr}, funct is ${funct}`);
    return funct(arr);
}