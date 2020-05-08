// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let firstTwo = [];
    firstTwo.push(drivers[0], drivers[1])
    return firstTwo
}

const returnLastTwoDrivers = function(drivers) {
    let lastTwo = [];
    lastTwo.push(drivers[drivers.length-2], drivers[drivers.length-1]);
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) {return num * fare};
}

function fareDoubler(fare) {return fare * 2}

function fareTripler(fare) {return fare * 3}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}