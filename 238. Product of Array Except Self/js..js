function productExceptSelf(nums) {
    const n = nums.length;
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    
    // Calculate products to the left
    leftProducts[0] = 1;
    for(let i = 1 ; i < n; i++) {
        leftProducts[i] = leftProducts[i-1] * nums[i-1];
        console.log( leftProducts[i-1], "*", nums[i-1], "=", leftProducts[i]);
    }
    console.log(leftProducts);
    
    // Calculate products to the right
    rightProducts[n-1] = 1;
    for(let i = n-2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i+1] * nums[i+1];
        console.log(rightProducts[i+1], "*", nums[i+1], "=", rightProducts[i]);
    }
    console.log(rightProducts);
    // Combine results
    return nums.map((_, i) => leftProducts[i] * rightProducts[i]);
}

console.log(productExceptSelf([1,2,3,4]));
