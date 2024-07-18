// Find Smallest Letter Greater Than Target
// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.z
// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
// Example 1:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

var nextGreatestLetter = function(letters, target) {
    let start = 0
    let end = letters.length - 1
   
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2)
        if (target < letters[mid]){
              end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return letters[start % letters.length]
}


// Wrap-Around Index
// If start equals the array length, letters[start % letters.length] wraps around and returns the first element.
// Example: start = 3 (array length)
// letters[3 % 3] = letters[0] = 'c'
// Returns 'c'.