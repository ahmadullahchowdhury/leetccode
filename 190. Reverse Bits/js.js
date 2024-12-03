var reverseBits = function(n) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        // Get least significant bit (rightmost bit)
        const lsb = n & 1;
        
        // Place this bit in its reverse position
        const reverseLsb = lsb << (31 - i);
        
        // Add it to result using OR operation
        result = result | reverseLsb;
        
        // Right shift n to get next bit
        n = n >>> 1;  // Use unsigned right shift
    }
    
    // Convert to unsigned 32-bit integer
    return result >>> 0;
};

console.log(reverseBits(00000010100101000001111010011100));
