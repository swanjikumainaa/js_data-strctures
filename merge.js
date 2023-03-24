

// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6


function findTargetIndex(num, target) {
  let index = null;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}


let num = [45, 12, 6, 89, 2, 5];
let target = 6;
let index = findTargetIndex(num, target);
console.log(index); 




// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]

function sortDescending(arr) {
  let n = arr.length;  
  if (n <= 1) {
    return arr;
  }
  let middle = Math.floor(n / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  left = sortDescending(left);
  right = sortDescending(right);

  let merged = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}


let arr = [123, 89, 5, 23, 9, 56];
let sortedArr = sortDescending(arr);
console.log(sortedArr);





// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return null; 
}


let target1 = 34;
let arr2 = [1, 4, 78, 2, 67, 3];
let index1 = binarySearch(arr, target);
console.log(index1); 