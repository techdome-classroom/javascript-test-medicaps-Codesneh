function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  // Step 1: Clean up the list
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1;
    }
  }

  // Step 2: Mark elements
  for (let i = 0; i < n; i++) {
    const val = Math.abs(nums[i]);
    if (val <= n) {
      const index = val - 1;
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      }
    }
  }

  // Step 3: Find the smallest missing positive integer
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  
  return n + 1;
}

// Export the function so that it can be required in other files
module.exports = smallestMissingPositiveInteger;
