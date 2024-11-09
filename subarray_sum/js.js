var maxSubArray = function(nums) {
    let MAX = Number.MIN_VALUE
    let sum = 0;

    if (nums.length === 0) return 0;

    for (let i in nums){
        sum = sum + nums[i]

        if (sum > MAX){
            MAX = sum;
        }

        if (sum < 0 ){
            sum = 0;
        }
    }

    return MAX;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
