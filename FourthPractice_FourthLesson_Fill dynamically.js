// Quiz: "Fill dynamically"
// This quiz includes topics from this lesson: "New and fill". If you find this quiz difficult, revisiting that lesson may help!
// Write a function fillDynamically(value, length). It should construct a new array of length filled with value


fillDynamically('d', 3);
// Expected: ['d', 'd', 'd'] OK!

fillDynamically('d', 1);
// Expected: ['d'] OK!

fillDynamically('a', 4);
// Expected: ['a', 'a', 'a', 'a'] OK!

fillDynamically('d', 0);
// Expected: [] OK!

// You must "new" a fixed-size array.
fillDynamically.toString().includes('new Array');
// Expected: true OK!

// 5 tests, 0 failures

// My Solution + Author's
function fillDynamically(value, length) {
  return new Array(length).fill(value);
}