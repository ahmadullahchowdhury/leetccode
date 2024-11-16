// var threeSum = function(nums) {
//     let st = new Set();
//     let ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         let hashset = new Set()
//         for (let j = i + 1; j < nums.length; j++) {
//             let k = - (nums[i] + nums[j]);
//             if(hashset.has(k)){
//               let temp =  [nums[i], nums[j], k];
//             //   console.log(temp)
//               temp.sort((a,b) => a-b);
//               ans.push(temp);
//             }
//             hashset.add(nums[j]);
//         }
//     }
//     let set  = new Set(ans.map(JSON.stringify));
//     ans = Array.from(set).map(JSON.parse);
//     return ans;
    
// };

const threeSum = (nums) => {
    let ans = [];
    nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] == nums[i-1] && i > 0 ) continue;
        let j = i + 1;
        let k = nums.length -1;
        while( j < k ){
            let sum = nums[i]+nums[j]+nums[k]
            if( sum < 0 ){
                j++
            } else if (sum>0){
                k--;
            } else{
                ans.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
                while( nums[j] == nums[j-1] && j < k ) j++;
                while( nums[k] == nums[k+1] && j < k ) k--;
            }
        }
    }
    return ans;
}


console.log(threeSum([-1,0,1,2,-1,-4]));
