const arr = [1,2,3,1]

const newSet = new Set(arr);

const newArr = Array.from(newSet);

if (newArr.length === arr.length) {
  console.log("No duplicates");
} else {
  console.log("Duplicates found");
}

// better solution
