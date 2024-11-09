# Array Duplicate Checker

This repository contains two efficient solutions for checking duplicates in a JavaScript array.

## Solutions

### 1. Using Set

#### How it works
- Creates a new Set from the array
- Set automatically removes duplicates
- Compares the size of Set with original array length
- If sizes differ, duplicates exist

#### Advantages
- Clean and concise code
- Easy to understand
- Good for smaller arrays

#### Disadvantages
- Creates additional data structure (Set)
- Uses more memory
- Always processes entire array

### 2. Using Array.some()

#### How it works
- Uses Array.some() to iterate through array
- For each element, compares its current index with its first occurrence
- If indexes don't match, element is duplicate
- Stops processing as soon as first duplicate is found

#### Advantages
- More efficient for large arrays
- Stops on first duplicate
- No additional data structures needed
- Memory efficient

#### Disadvantages
- Slightly more complex logic
- indexOf() has O(n) complexity

## Time Complexity
- Set solution: O(n)
- Array.some() solution: O(n²) worst case, but can be faster in practice due to early termination

## Space Complexity
- Set solution: O(n)
- Array.some() solution: O(1)

## Usage

## When to Use Which

### Use Set Solution When:
- Working with smaller arrays
- Code readability is priority
- Memory usage isn't a concern
- Need quick implementation

### Use Array.some() Solution When:
- Working with large arrays
- Performance is critical
- Memory efficiency is important
- Need early termination on first duplicate


### Step-by-step analysis:
1. Array.some():
   - Iterates through each element: O(n)

2. For each iteration:
   - arr.indexOf(item): 
     - Searches through array: O(n)
   - Comparison operation: O(1)

**Total Time Complexity: O(n²)**

## Detailed Comparison

### Set Solution:
- Best Case: O(n)
- Average Case: O(n)
- Worst Case: O(n)
- Always needs to process entire array

### Array.some() Solution:
- Best Case: O(n) (duplicate at start)
- Average Case: O(n²/2)
- Worst Case: O(n²) (no duplicates or duplicate at end)
- Can terminate early on finding first duplicate

## Space Complexity
### Set Solution:
- Creates new Set: O(n)

### Array.some() Solution:
- No additional data structures: O(1)

## Performance Example
For an array of size 1000:
- Set Solution: ~1000 operations
- Array.some() Solution: 
  - Best case: ~1000 operations (duplicate at start)
  - Worst case: ~1,000,000 operations (no duplicates)