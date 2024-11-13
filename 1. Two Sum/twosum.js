const arr = [3, 2, 4];
const target = 6;

const twoSum = (arr, target) => {
  const indexArr = arr.map((item, index) => ({
    item,
    index,
  }));

  const sorrtedArr = indexArr.sort((a, b) => a.item - b.item);
  let left = 0;
  let right = sorrtedArr.length - 1;

  while (left < right) {
    console.log(sorrtedArr[left]);
    const sum = sorrtedArr[left].item + sorrtedArr[right].item;
    if (sum === target) {
       
      return [sorrtedArr[left].index, sorrtedArr[right].index];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};

console.log(twoSum(arr, target));
