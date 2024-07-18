//Q: Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]


// method 1:


function binarySearch(nums, target) {
    let ans = [-1, -1];
  
    let start = search(nums, target, true);
    let end = search(nums, target, false);
    ans[0] = start;
    ans[1] = end;
  
    return ans;
  
    function search(nums, target, findStartIndex) {
      let ans = -1;
      let start = 0;
      let end = nums.length - 1;
  
      while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
  
        if (target < nums[mid]) {
          end = mid - 1;
        } else if (target > nums[mid]) {
          start = mid + 1;
        } else {
          // ans found
          ans = mid;
          if (findStartIndex) {
            end = mid - 1;
          } else {
            start = mid + 1;
          }
        }
      }
      return ans;
    }
  }
  


// method 2: 

// var searchRange = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   let lower = target;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] >= target) {
//       lower = mid;
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   left = -1;
//   right = nums.length;
//   while (left + 1 < right) {
//     const mid = Math.floor((right - left) / 2) + left;

//     if (nums[mid] <= target) {
//       left = mid;
//     } else {
//       right = mid;
//     }
//   }
//   let upper = left;

//   if (nums[lower] !== target) return [-1, -1];

//   return [lower, upper];
// };

// let nums = [5, 7, 7, 8, 8, 10];
// let target = 6;
// let res = searchRange(nums, target);
// console.log(res); // Output: [3, 4]






