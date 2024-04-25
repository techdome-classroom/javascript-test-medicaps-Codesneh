function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    const val = Math.abs(nums[i]);
    if (val <= n) {
      const index = val - 1;
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  
  return n + 1;
}

module.exports = smallestMissingPositiveInteger;
