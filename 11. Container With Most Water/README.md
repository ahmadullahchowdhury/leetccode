# Container With Most Water - Solution

## Problem
Given an array of heights, find two lines that together with the x-axis forms a container that would hold the maximum amount of water.

## Intuition
1. We need to find two lines where:
   - The area between them is maximum
   - Area = width (distance between lines) × height (minimum of two line heights)

2. Key insights:
   - Width decreases as we move pointers inward
   - To maximize area, we need to find taller heights to compensate for decreasing width
   - Always move the pointer with smaller height inward, as it limits the current area

## Solution with Two Pointers

## Example Walkthrough
Let's take the example: `[1,8,6,2,5,4,8,3,7]`

1. Initial state:
   - left = 0 (height = 1)
   - right = 8 (height = 7)
   - area = 8 × min(1,7) = 8

2. Move left pointer (since 1 < 7):
   - left = 1 (height = 8)
   - right = 8 (height = 7)
   - area = 7 × min(8,7) = 49

3. Move right pointer (since 8 > 7):
   - left = 1 (height = 8)
   - right = 7 (height = 3)
   - area = 6 × min(8,3) = 18

...and so on until pointers meet.

## Time & Space Complexity
- Time Complexity: O(n) - single pass through the array
- Space Complexity: O(1) - only using two pointers

## Why it Works
1. We start with maximum possible width
2. As we move pointers inward:
   - Width decreases
   - We only move the pointer with smaller height
   - This gives us chance to find a larger height that could increase area
3. We can't miss the maximum area because:
   - If we move the larger height pointer, area would definitely decrease
   - By moving smaller height pointer, we might find a larger height