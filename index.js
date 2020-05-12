const returnFirstTwoDrivers = (a) => {
    return [a[0], a[1]];
}

const returnLastTwoDrivers = (a) => {
    return [a[a.length -2], a[a.length -1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier =function(multiplyValue) {
    return function(value) {
        return multiplyValue * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, selectedDriver) {
    return selectedDriver(drivers)
}
