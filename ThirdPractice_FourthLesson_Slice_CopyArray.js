// Quiz: "Copy array"
// Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a reference for all of the lessons that you've finished at the bottom-right of the page.
// Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.
// Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.
// This quiz includes topics from this lesson: "Slice". If you find this quiz difficult, revisiting that lesson may help!
// Write a function copyArray that returns a copy of an array. Changes to the copy shouldn't affect the original array and vice-versa.

copyArray([]);
//Expected: [] OK!

copyArray(['a', 'b']);
//Expected: ['a', 'b'] OK!

copyArray([null, undefined, false]);
//Expected: [null, undefined, false] OK!

const original = ['a', 'b'];
const copy = copyArray(original);
copy.push('c');
original;
//Expected: ['a', 'b'] OK!

const original2 = ['a', 'b'];
const copy2 = copyArray(original2);
original2.push('c');
copy2;
//Expected: ['a', 'b'] OK!

// You must use slice.
copyArray.toString().includes('slice');
//Expected: true OK!

//6 tests, 0 failures

//My solution
function copyArray(array) {
  const arrCopy =  array.slice();
  return arrCopy;
}

//Author's solution
function copyArray(array) {
    return array.slice();
}