"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  //console.log(values);

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 3 == 0) {
      threeCallback();
    }
    if (values[i] % 5 == 0) {
      fiveCallback();
    }
  }
}

function sayThree() {
  console.log("Divisible by Three");
}
function sayFive() {
  console.log("Divisible by Five");
}

threeFive(10, 15, sayThree, sayFive);
