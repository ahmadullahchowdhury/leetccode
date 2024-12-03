var missingNumber = function(nums) {
    const sorted = nums.sort((a, b) => a - b);



    const length = sorted.length;

    if(sorted[length - 1] !== length){
        return length;
    } 

    for (let i = 0; i < sorted.length; i++){
        if( sorted[i] === i){
            continue;
        } else {
            return i;
        }
    }
    
};

console.log(missingNumber([1,2])); 