function orderBS(arr, target){
    let start = 0
    let end = arr.length -1

    // whteher order of array is ascending or decending
     let  isAscending  = arr[start] < arr[end];

     while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if(target == arr[mid]){
            return mid
        }

        if (isAscending) {
            if (target < arr[mid]) {
              end = mid - 1;
            } else {
              start = mid + 1;
            }
          } else {
            if (target > arr[mid]) {
              end = mid - 1;
            } else {
              start = mid + 1;
            }
          }
        }
      
        return -1; // Element not found
      }
      
      let arr = [1, 75, 18, 8, 16, 40, 30, 10];
      let target =18;
      let res = orderBS(arr, target);
      console.log(res); // Output: 0

      
      
      