var maxProduct = function (nums) {
  let max = -Infinity;
  let pre_product = 1;
  let suf_product = 1;

  for (let i = 0; i < nums.length; i++) {
    if (pre_product == 0) {
      pre_product = 1;
    }
    if (suf_product == 0) {
      suf_product = 1;
    }

    pre_product = pre_product * nums[i];
    suf_product = suf_product * nums[nums.length - 1 - i];
    max = Math.max(max, pre_product, suf_product);
  }
  return max;
};

console.log(maxProduct(nums));
