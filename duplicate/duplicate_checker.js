const arr = [1,2,3,1]

const newSet = new Set(arr);

const newArr = Array.from(newSet);

if (newArr.length === arr.length) {
  console.log("No duplicates");
} else {
  console.log("Duplicates found");
}

// better solution
const hasDuplicates = arr.some((item, index) => arr.indexOf(item) !== index);
console.log(hasDuplicates ? "Duplicates found" : "No duplicates");