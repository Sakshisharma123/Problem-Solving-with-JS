// Reverse a given Array

function reverseArray(arr, index = arr.length - 1) {
  if (index < 0) return [];
  return [arr[index]].concat(reverseArray(arr, index - 1));
} 

let arr = [1, 5, 6, 7, 8, 4];
console.log(reverseArray(arr)); 

