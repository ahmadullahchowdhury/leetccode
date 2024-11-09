# Maximum Subarray Problem

## Problem Description
Given an integer array `nums`, find the subarray with the largest sum and return its sum.

## Example
```javascript
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum = 6
```

## Solution Approach (Kadane's Algorithm)

### Algorithm Steps:
1. Initialize two variables:
   - `MAX`: to keep track of maximum sum found so far
   - `sum`: to keep track of current sum

2. Iterate through the array:
   - Add current element to `sum`
   - If `sum` becomes greater than `MAX`, update `MAX`
   - If `sum` becomes negative, reset it to 0

### Visual Explanation
Let's see how the algorithm works with the example array:
```
Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Step-by-step process:
i=0: nums[0]=-2
     sum = -2, MAX = -2
     sum < 0, so sum = 0

i=1: nums[1]=1
     sum = 1, MAX = 1

i=2: nums[2]=-3
     sum = -2, MAX = 1
     sum < 0, so sum = 0

i=3: nums[3]=4
     sum = 4, MAX = 4

i=4: nums[4]=-1
     sum = 3, MAX = 4

i=5: nums[5]=2
     sum = 5, MAX = 5

i=6: nums[6]=1
     sum = 6, MAX = 6

i=7: nums[7]=-5
     sum = 1, MAX = 6

i=8: nums[8]=4
     sum = 5, MAX = 6

Final result: 6
```

## Code Implementation
```javascript
var maxSubArray = function(nums) {
    let MAX = Number.MIN_VALUE;  // Initialize MAX to smallest possible number
    let sum = 0;                 // Initialize current sum to 0

    for (let i in nums) {
        sum = sum + nums[i];     // Add current element to sum

        if (sum > MAX) {         // Update MAX if sum is greater
            MAX = sum;
        }

        if (sum < 0) {           // Reset sum if it becomes negative
            sum = 0;
        }
    }
    
    return MAX;
};
```

## Time and Space Complexity
- Time Complexity: O(n) - where n is the length of the array
- Space Complexity: O(1) - only using two variables regardless of input size