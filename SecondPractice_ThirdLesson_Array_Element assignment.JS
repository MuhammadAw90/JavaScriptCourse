// Quiz: "Element assignment"
// Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a reference for all of the lessons that you've finished at the bottom-right of the page.

// Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

// Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

// This quiz includes topics from this lesson: "Basics". If you find this quiz difficult, revisiting that lesson may help!
// Write a function that puts a 0 in element 1 of an array. Make sure that the function returns null. Returning null makes it clear that the function modifies the array.

// >
// const array = [0, 0, 0];
// f(array);
// Expected: null OK!

// >
// const array = [0, 0, 0];
// f(array);
// array;
// Expected: [0, 0, 0] OK!

// >
// const array = [1, 1, 1];
// f(array);
// array;
// Expected: [1, 0, 1] OK!

// >
// const array = [1, 2, 3];
// f(array);
// array;
// Expected: [1, 0, 3] OK!

// >
// const array = [1, 2, 3, 4, 5, 6];
// f(array);
// array;
// Expected: [1, 0, 3, 4, 5, 6] OK!

// >
// const array = ['a', 'b', 'c'];
// f(array);
// array;
// Expected: ['a', 0, 'c'] OK!

// 6 tests, 0 failures

//My solution
function f(nums) {
  for (let i=0;i<nums.length;i++)
  {
    if (i==1 && nums[i]!=0)
    {
      nums[i]=0;
      return nums;
    }
  }
  return null;
}

//Author code :
function f(num){
    num[1] = 0;
    return null;
}