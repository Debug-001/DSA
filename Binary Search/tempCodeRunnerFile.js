function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    //this may exceed interger value for int range
    //  let mid = Math.floor((start + end)/ 2);
    // this below one won't
    let mid = Math.floor(start + (end - start) / 2);

    if(target < arr[mid]){
        end = mid - 1
    }
    else if (target > arr[mid]){
        start = mid + 1
    }
    else {
        return mid;
    }
}
return -1
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let target = 10
let res = binarySearch (arr,target)
console.log(res);