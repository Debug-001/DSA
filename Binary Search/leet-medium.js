//Q: Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

function binarySearch(nums, target) {
  let ans = [-1, -1];

  // The search function is called with findStartIndex set to true to find the first occurrence of the target.
  // The result is stored in ans[0].
  ans[0] = search(nums, target, true);
  // If the first occurrence is found (i.e., ans[0] is not -1), proceed to find the last occurrence.
  if (ans[0] != -1)
    //     The search function is called with findStartIndex set to false to find the last occurrence of the target.
    // The result is stored in ans[1].
    ans[1] = search(nums, target, false);

  return ans;

  function search(nums, target, findStartIndex) {
    // Initializing ans to -1 ensures that if the target is not found, the function returns -1, which is a clear indicator that the target is not present in the array.
    //     Initializing ans to -1 ensures that each call to the search function starts with a clean state, unaffected by previous calls.
    // Indicating Not Found: If the binary search loop completes without finding the target, ans remains -1, correctly indicating that the target is not present.
    // Local Scope: The ans variable inside the search function is local to that function. It does not affect the ans array in the binarySearch function.
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
        // target found
        // ans becomes mid
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

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9];
let target = 4;
let res = binarySearch(nums, target);
console.log(res);
