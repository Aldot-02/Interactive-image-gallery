function subArraySumExists(arr, target) {
  let sum = 0;
  let start = 0;

  // Loop through the array
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum > target && start < end) {
      sum -= arr[start];
      start++;
    }

    // If the sum is equal to the target, return true
    if (sum === target) {
      return true;
    }
  }

  // Else return false
  return false;
}

// For Testing the function
console.log(subArraySumExists([4, 2, 7, 1, 9, 5], 17));
