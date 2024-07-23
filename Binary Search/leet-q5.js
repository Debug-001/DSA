// Q; find peak index in mountain array- bitonic array
// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
// Return the index of the peak element.
// Your task is to solve it in O(log(n)) time complexity.

// Example 1:
// Input: arr = [0,1,0]
// Output: 1

// Example 2:
// Input: arr = [0,2,1,0]
// Output: 1

// Example 3:
// Input: arr = [0,10,5,2]
// Output: 1


// method 2: 
function Mountain(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid+1]){
        end = mid
    }else { 
        start = mid + 1
    }
  }
  return start
}

let arr = [0,2,1,0,1,2,3,4,3,2,1,0]
let res = Mountain(arr)
console.log(res);

// method 2:
// var peakIndexInMountainArray = function(arr) {
//   let val = arr[0]; // Initialize val with the first element of the array
//   let index = 0;    // Initialize index with 0 (the index of the first element)
  
//   for (let i = 0; i < arr.length; i++) { // Loop through the array
//       if (arr[i] > val) { // If the current element is greater than val
//           val = arr[i];   // Update val to the current element
//           index = i;      // Update index to the current index
//       }
//   }
  
//   return index; // Return the index of the peak element
// }