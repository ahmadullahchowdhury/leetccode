# twoSum Problem Solution

## Problem Statement
Given an array of integers and a target integer, return the indices of the two numbers in the array that add up to the target. Assume that each input has exactly one solution, and an element cannot be used twice.

## Solution Methodology

### Index Mapping:
First, map each element in the array along with its index to keep track of their original positions. This allows us to return the indices later after sorting.

### Sorting:
Sort the mapped array based on the values of the elements. Sorting simplifies the search for a pair that matches the target sum because we can use the two-pointer technique efficiently.

### Two-Pointer Technique:
- Initialize two pointers, left at the start of the sorted array and right at the end.
- While left is less than right:
  - Calculate the sum of the elements at the left and right pointers.
  - If the sum matches the target, return the indices of the two numbers.
  - If the sum is greater than the target, decrement the right pointer to decrease the sum.
  - If the sum is less than the target, increment the left pointer to increase the sum.

### Edge Cases:
- If no pair is found, return an empty array.

This approach combines sorting and the two-pointer technique to achieve an efficient solution for finding two numbers that sum up to the target.