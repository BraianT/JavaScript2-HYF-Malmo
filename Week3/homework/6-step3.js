"use strict";

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem

let arr1d = [];

function flattenArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0)
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j].length > 0)
          for (let k = 0; k < arr[i][j].length; k++) {
            arr1d.push(arr[i][j][k]);
          }
        else {
          arr1d.push(arr[i][j]);
        }
      }
  }
}
flattenArr(arr2d);

console.log(arr1d);
/*
function newIteration(arr) {
  if (arr[i].length > 0) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].length > 0)
        for (let k = 0; k < arr[i][j].length; k++) {
          arr1d.push(arr[i][j][k]);
        }
      else {
        arr1d.push(arr[i][j]);
    
  }
}
*/
