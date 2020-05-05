// Code your solution in this file!

const returnFirstTwoDrivers = function(arr) {
    return [arr[0], arr[1]]
}
const returnLastTwoDrivers = (array) => {
    return [array[array.length - 2], array[array.length - 1]];
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) {
       return fare * int
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arr, func){
    return func(arr)
}