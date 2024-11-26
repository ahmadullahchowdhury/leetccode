var getSum = function(a, b) {
    while(b!=0){
        let temp = a ^ b
        let carry = (a & b) << 1
        
        a = temp
        b = carry
    }

    return a
};


const a = 1  
const b = 2

console.log(getSum(a, b))