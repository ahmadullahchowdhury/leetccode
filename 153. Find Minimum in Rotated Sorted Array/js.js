var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        console.log(nums[mid]);
        if ( nums[mid] < nums[right] ) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left];
};

console.log(findMin([4,5,6,7,0,1,2]));