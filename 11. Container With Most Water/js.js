function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        // Calculate width between lines
        const width = right - left;
        
        // Calculate height (minimum of two lines)
        const h = Math.min(height[left], height[right]);
        
        // Calculate and update maximum area
        maxWater = Math.max(maxWater, width * h);
        
        // Move pointer with smaller height inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}


const  arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));