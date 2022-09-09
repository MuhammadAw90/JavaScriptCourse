// Quiz: "Get first element"
// Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a reference for all of the lessons that you've finished at the bottom-right of the page.
// Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.
// Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.
// This quiz includes topics from this lesson: "Slice". If you find this quiz difficult, revisiting that lesson may help!
// Use slice to write a function takeFirst(arr, n). It should return a new array of the first n elements of arr. If n is larger than the array's length, return a copy of the array. Don't worry about negative n.

takeFirst([1, 2, 3], 0);
//Expected: [] OK!

takeFirst([1, 2, 3], 1);
//Expected: [1] OK!

takeFirst([1, 2, 3], 2);
//Expected: [1, 2] OK!

takeFirst([1, 2, 3], 5);
//Expected: [1, 2, 3] OK!

const original = [1, 2, 3];
const copy = takeFirst(original, 2);
original.push(3);
copy;
//Expected: [1, 2] OK!

// You must use slice.
takeFirst.toString().includes('slice');
//Expected: true OK!

//6 tests, 0 failures

//My solution
function takeFirst(arr, n) {
  if(n<=arr.length)
  {
     const a = arr.slice(0,n);
     return a;
  }
  else 
    return arr;
}

//Author solution
function takeFirst(arr, n) {
  return arr.slice(0,n);
}