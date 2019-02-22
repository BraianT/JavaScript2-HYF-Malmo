"use strict";

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  var test = "";
  for (let i = 0; i < num; i++) {
    test += str;
  }
  return test;
}

console.log("for", repeatStringNumTimesWithFor("abc", 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  var test = "";
  let i = 0;
  while (i < num) {
    test += str;
    i++;
  }
  return test;
}

console.log("while", repeatStringNumTimesWithWhile("abc", 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let i = 0;
  let test = "";
  do {
    i++;
    test += str;
  } while (i < num);
  return test;
}

console.log("while", repeatStringNumTimesWithDoWhile("abc", 3));
