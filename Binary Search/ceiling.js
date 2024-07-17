// ceiling :smallest number in array >=  target.
// floor: the greatest num in array <= target
// what if target > greatest num in array? then no ceiling
// remember for floor return (end) and for ceiling return (start)

function ceiling(arr, target) {
  if (target > arr[arr.length - 1]) {
    return "target exceeds end element";
  }

  let start = 0;
  let end = arr.length - 1;

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
  return end;
}

arr = [2, 3, 5, 9, 14, 16, 18];
target = 10;
res = ceiling(arr, target);
console.log(res);
