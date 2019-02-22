"use strict";

const values = ["a", "b", "c", "d", "a", "e", "f", "c"];

// Add your function here. Try and come up with a good name for this function

function removeDuplicates(arr) {
  let notRepeated = [];
  let test = [];
  for (let i = 0; i < arr.length; i++) {
    test = notRepeated.filter(j => j == arr[i]);
    if (test.length == 0) {
      notRepeated.push(arr[i]);
    }
  }

  return notRepeated;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = removeDuplicates(values);

console.log(uniqueValues);
