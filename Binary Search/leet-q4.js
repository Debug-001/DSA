function infiniteArray(arr, target) {
  // Find the range in which the target lies
  let start = 0;
  let end = 1;

  while (target > arr[end]) {
    let temp = end + 1;
    end = end + (end - start + 1) * 2;
    start = temp;
  }
  // Now that we have the range, perform binary search within that range
  return binarySearch(arr, target, start, end);
}

function binarySearch(arr, target, start, end) {
  // simple binary search
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

let arr = [3, 5, 7, 9, 10, 100, 130, 140, 160, 170];
let target = 10;
let res = infiniteArray(arr, target);
console.log(res);
