// JavaScript Arrays: For each
// Sometimes, we'll ask you to complete a missing part of a code example, like this one:
// Here's a code problem:
// Add a value of x that makes this code produce the result shown at the bottom. We'll always run all of the code together from top to bottom: both the code that you can't change and the code that you wrote.

function double(aNumber) {
  return 2 * aNumber;
}
3
const x = 3
double(x);
// GOAL:
// 6
// YOURS:
// 6

// Show Author's Answer
// Now that we've shown you how to answer our prompts, here's the "For each" lesson from the JavaScript Arrays course:
// forEach executes a function once for each element in an array. Let's use it to sum an array of numbers.

const nums = [1, 2, 3];
let sum = 0;
nums.forEach(num => {
  sum = sum + num;
});
sum;
// RESULT:
// 6

// In the next example, we want to build a list of peoples' names. We use a for loop to add each name to an array. That requires looking elements up by their indexes i.

const people1 = [
  {name: 'Amir'},
  {name: 'Betty'},
];
const names1 = [];
for (let i=0; i<people1.length; i++) {
  names1.push(people1[i].name);
}
names1;
// RESULT:
// ['Amir', 'Betty']

// forEach lets us write the same code without the index variable i. We pass a function to forEach, which runs the function on each element.

const people2 = [
  {name: 'Cindy'},
  {name: 'Dalili'},
];
const names2 = [];
people2.forEach(person => {
  names2.push(person.name);
});
names2;
// RESULT:
// ['Cindy', 'Dalili']

// We can modify the array's elements during the forEach.


const people3 = [
  {name: 'Ebony'},
  {name: 'Fang'},
];
people3.forEach(person => {
  person.name = person.name.toUpperCase();
});
people[0].name;
// RESULT:
// 'EBONY'
// The callback function can reference, and even modify, variables defined in outer scopes. In the next example, the callback function modifies the result variable.

const names3 = ['Gabriel', 'Hana'];
let result3 = '';
names3.forEach(name => {
  result3 += name;
});
// result;
// RESULT:
// 'GabrielHana'
// The second argument to forEach's callback is the item's index.

const names4 = ['Gabriel', 'Hana'];
const userIDs = [10, 11];
let result = '';
names4.forEach((name, index) => {
  result += name + userIDs[index];
});
result;
// RESULT:
// 'Gabriel10Hana11'
// The examples above defined the callback functions inline, at the point where we called forEach. Functions are values in JavaScript, so we can pass them in other ways as well. For example, we can put the function in a variable, then pass the variable to forEach. The following examples define our forEach callback function in different ways, but they all have the same effect.

let sum1 = 0;
[1, 2, 3, 4].forEach(n => {
  sum1 += n;
});
sum1;
// RESULT:
// 10


let sum2 = 0;
function addToSum(n) {
  sum2 += n;
}
[1, 2, 3, 4].forEach(addToSum);
sum2;
// RESULT:
// 10

let sum3 = 0;
const addToSum = n => sum3 += n;
[1, 2, 3, 4].forEach(addToSum);
sum3;
// RESULT:
// 10

// Here's a code problem:
// This function should return true when some of the numbers are positive. Currently it's broken: it always returns false. That's because we tried to return true inside the forEach callback. But the callback's return value is simply thrown away, so that doesn't work.
// Modify the function by using the sawPositiveNumber variable that we've already declared for you. Set it to true when a positive number is encountered. Then return it at the end of the hasPositiveNumbers function.

function hasPositiveNumbers(numbers) {
  let sawPositiveNumber = false;
  numbers.forEach(n => {
    if (n > 0) {
      sawPositiveNumber = true;
    }
  });
  return sawPositiveNumber;
}

// [
//   hasPositiveNumbers([]),
//   hasPositiveNumbers([-2, -1, 0]),
//   hasPositiveNumbers([-1, 0, 100]),
//   hasPositiveNumbers([50]),
// ];
// GOAL:
// [false, false, true, true]
// YOURS:
// [false, false, true, true]

// Show Author's Answer
// Keep that bug in mind! It's easy to make that mistake when using forEach, as well as other array functions that we'll see later like map and reduce.