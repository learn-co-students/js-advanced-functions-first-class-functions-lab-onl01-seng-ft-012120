// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){ return drivers.slice(0,2)};

const returnLastTwoDrivers = function(drivers){ return drivers.slice(-2)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(numb){
    return function(fare){
        return fare * numb
    }
}

const double = createFareMultiplier(2);
function fareDoubler(fare){
    return double(fare);
}

const triple = createFareMultiplier(3);
function fareTripler(fare){
    return triple(fare);
}

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}