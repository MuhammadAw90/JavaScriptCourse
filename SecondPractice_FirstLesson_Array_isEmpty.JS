// Quiz: "Empty"
// Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a reference for all of the lessons that you've finished at the bottom-right of the page.

// Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

// Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

// This quiz includes topics from this lesson: "Basics". If you find this quiz difficult, revisiting that lesson may help!

// Write a function isEmpty(arr) that returns true if the array is empty.


isEmpty([]);
// Expected: true OK!


isEmpty([1, 2]);
// Expected: false OK!


isEmpty(['a', 'b']);
// Expected: false OK!


isEmpty([undefined]);
// Expected: false OK!

// 4 tests, 0 failures


//My solution 
function isEmpty(arr) {
  if(arr.length==0)
    return true;
  else
    return false;
}

//Author solution
function isEmpty(arr) {
   return arr.length === 0;
}