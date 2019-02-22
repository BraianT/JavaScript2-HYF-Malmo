"use strict";

// Add your code here
function createBase(num) {
  return function(y) {
    console.log(num + y);
    return num + y;
  };
}

const addSix = createBase(10);
console.log(addSix);
addSix(10); // returns 16
addSix(21); // returns 27
