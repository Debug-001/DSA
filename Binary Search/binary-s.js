function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    //this may exceed interger value for int range
    //  let mid = Math.floor((start + end)/ 2);
    // this below one won't
    // note that mid is here the index not element.
    let mid = Math.floor(start + (end - start) / 2);

    // arr[mid]returns the element in the array at mid index then its compares to target. if target less than mid index element.
    if(target < arr[mid]){
        // we change end to mid index - 1
        end = mid - 1
    }

    else if (target > arr[mid]){
        // if target > mid index element
        // start becomes mid index + 1
        start = mid + 1
        // and we again return mid
    }
    else {
        return mid;
    }
}
return -1
}

//The output is -1 because the array is sorted in descending order, but the binary search algorithm provided is designed for arrays sorted in ascending order. In a descending order array, the logic for adjusting the start and end indices needs to be reversed. 
let arr = [90,75,18,12,6,4,3,1]
let target = 90
let res = binarySearch (arr,target)
console.log(res);