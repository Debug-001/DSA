// step 3: host function: call peak function and then orderbs function
function binarySearch(arr, target) {
  // Find the peak element's index in the mountain array
  let peak = Mountain(arr);

  // Try to find the target in the ascending part of the array
  let firstTry = orderBS(arr, target, 0, peak);
  // If the target is found in the ascending part, return the index
  if (firstTry !== -1) {
    return firstTry;
  }
  // If the target is not found in the ascending part, try the descending part
  return orderBS(arr, target, peak + 1, arr.length - 1);
}

//step 1: this function only finds the peak element
function Mountain(arr) {
  // Initialize the start and end pointers
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    // If the mid element is greater than the next element, peak is in the left half
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      // If the mid element is smaller than the next element, peak is in the right half
      start = mid + 1;
    }
  }
  // Return the index of the peak element
  return start;
}

//step 2: since array is not completely sorted, find in asc order then desc order
function orderBS(arr, target, start, end) {
  // Determine if the current sub-array is sorted in ascending order
  let isAscending = arr[start] < arr[end];

  // note here the binary search will run twice, once isAscending is true and once false.
  while (start <= end) {

    let mid = Math.floor(start + (end - start) / 2);
 
    // If the target is found at mid, return the mid index found
    if (target === arr[mid]) {
      return mid;
    }
    //And If the array is sorted in ascending order
    if (isAscending) {
      // If target is smaller than mid element, search the left half
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        // If target is greater than mid element, search the right half
        start = mid + 1;
      }
    } else {
      // If the array is sorted in descending order. If target is greater than mid element, search the left half
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        // If target is smaller than mid element, search the right half
        start = mid + 1;
      }
    }
  }

  // If the target is not found, return -1
  return -1;
}

let arr = [1, 2, 3, 4, 1, 3, 1,0,5];
let target = 5;
let res = binarySearch(arr, target);
console.log(res);
