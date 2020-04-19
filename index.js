const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2);
  }
  
  const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2);
  }
  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

  const createFareMultiplier = (int) => {
        return (fare) => { return int * fare};
  }

  const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
  }

  const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
  }

  const selectDifferentDrivers = (arr, fn) => {
    return fn(arr);
  }