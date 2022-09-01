// Quiz: "Element access"
// Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a reference for all of the lessons that you've finished at the bottom-right of the page.
// Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.
// Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.
// This quiz includes topics from this lesson: "Basics". If you find this quiz difficult, revisiting that lesson may help!
// Write a function at(arr, i) that returns the element at index i.

//Your function should return null if the index isn't in the array, for example in at([], 0). The easiest way to do this is to check for whether the requested index is within the range of the array's indexes. You can compare the index against 0 and the array's length.


at([0, 0, 0], 0);
//Expected: 0 OK!

at([1, 2, 3], 1);
//Expected: 2 OK!

at([1, 2, 3], 0);
//Expected: 1 OK!

at(['a'], 0);
//Expected: 'a' OK!

at([1, 2, 3], 3);
//Expected: null OK!

at([1, 2, 3], 5);
//Expected: null OK!

at([], 0);
//Expected: null OK!

at([], 1);
//Expected: null OK!

at([1, 2, 3], -1);
//Expected: null OK!

at([undefined], 0);
//Expected: undefined OK!

//10 tests, 0 failures

//My solution
function at(arr, i) {
  if(i>=arr.length || i<0 )
    return null;
  else
  return arr[i];
}

//Author solution
function at(arr,i) {
    //Is this index actully in the array?
   if (i<0 || i>= arr.length) {
    return null;
   } else {
    return arr[i];
   }
} 