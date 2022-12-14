// JavaScript Arrays: Slice with negative arguments
// We can slice from the end of the array by using negative indexes. You can think of a negative index -2 as array.length - 2. Or you can think of it as "two away from the end".
// This example means "slice from the second-to-last element to the end".

const nums = [10, 20, 30, 40, 50];
nums.slice(nums.length - 2);
// RESULT:
// [40, 50]

[10, 20, 30, 40, 50].slice(-2);
// RESULT:
// [40, 50]

[10, 20].slice(-2);
// RESULT:
// [10, 20]

// In an earlier lesson, we saw what happens when we slice past the end of the array with a positive argument. Here's a reminder: in the next example, there's no element at index 4, so we get an empty array.

[10, 20].slice(4, 5);
// RESULT:
// []

// With negative indexes, we can also slice before the beginning of the array. The result will only include elements in the original array. It won't invent additional elements to satisfy our out-of-bounds index.

[10, 20].slice(-100);
// RESULT:
// [10, 20]

// Both begin and end can be negative. Remember that the end element isn't included in the slice.

[10, 20, 30].slice(-3, -1);
// RESULT:
// [10, 20]

[10, 20, 30, 40, 50].slice(-3, -1);
// RESULT:
// [30, 40]

// We can mix positive and negative begin and end indexes.

[10, 20, 30, 40, 50].slice(1, -1);
// RESULT:
// [20, 30, 40]

[10, 20, 30, 40, 50].slice(-3, 4);
// RESULT:
// [30, 40]