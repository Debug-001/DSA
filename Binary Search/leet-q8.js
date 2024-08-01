// Q: Find the rotation count in rotated sorted array 
// desc: consider arr of disctint numbers sorted in increasing order. The arr has been rotated (clockwise) k number of times, given suc an array, find the value of k.
function search(arr) {
  
    let pivot = findPivot(arr)
    return pivot + 1
  
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
          if (arr[mid] <= arr[start]) {
              end = mid - 1;
            } else {
              start = mid + 1;
            }
          }
      return -1;
    }
  }
  
  let arr = [1,2,3,4,5,6];
  let res = search(arr);
  console.log(res);
