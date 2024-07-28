function search(nums, target) {
  let pivot = findPivot(nums);
  if (pivot == -1) {
    return binarySearch(nums, target, 0, nums.length - 1);
  }
  if (nums[pivot] == target) {
    return pivot;
  }
  if (target >= nums[0]) {
    // Corrected from target > nums[0] to target >= nums[0]
    return binarySearch(nums, target, 0, pivot - 1);
  }
  return binarySearch(nums, target, pivot + 1, nums.length - 1);

  function binarySearch(arr, target, start, end) {
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] == target) {
        // Fixed condition to check if arr[mid] == target
        return mid;
      }
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1; // Ensure that -1 is returned if target is not found
  }
  //   duplicates check
  function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (mid < end && arr[mid] > arr[mid + 1]) {
        return mid;
      }
      if (mid > start && arr[mid] < arr[mid - 1]) {
        return mid - 1;
      }
      //   without duplicates code==========
      //   if (arr[mid] <= arr[start]) {
      //       end = mid - 1;
      //     } else {
      //       start = mid + 1;
      //     }
      //   }
      // ==============
      // with duplicates code
      // if elements at middle,start,end are equal, just skip the duplicates,
      if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
        // skip the duplicates
        // what if? these elements at start and were pivot
        // check if start is pivot
        if (arr[start] > arr[start + 1]) {
          return start;
        } else {
          start++;
        }
        // check whether end is pivot
        if (arr[end] < arr[end - 1]) {
          return end - 1;
        } else {
          end--;
        }
      } else if (
        arr[start] > arr[mid] ||
        (arr[start] == arr[mid] && arr[end] < arr[mid])
      ) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
}

let nums = [2, 9, 2, 2, 2];
let target = 2;
let res = search(nums, target);
console.log(res);
