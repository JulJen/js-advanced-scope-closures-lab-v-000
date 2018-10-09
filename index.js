/*
produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. ProduceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.

The functions should make use of closures to achieve the specified goals.
*/

function produceDrivingRange(blockRange) {
  return function (start, end) {

    let total = parseInt(end) - parseInt(start)

    if (total > blockRange) {
      return `${total - blockRange} blocks out of range`

    } else if (total < blockRange) {
      return `within range by ${blockRange - total}`
    }
  }
}

/*
produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
*/



function produceTipCalculator(percentTip) {
  return function (tipAmount) {
    return tipAmount * percentTip
  }
}


/*
createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
*/


function createDriver() {
  let driverId = 0;
}
