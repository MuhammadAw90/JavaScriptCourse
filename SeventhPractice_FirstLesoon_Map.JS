// JavaScript Arrays: Map
// map calls a function on each element of an array. It returns a new array of the values returned from those function calls.

[1, 2, 3].map(num => num * 10);

// RESULT:
// [10, 20, 30]

['a', 'b', 'c'].map(x => x.toUpperCase());

// RESULT:
// ['A', 'B', 'C']

// map doesn't change the original array.

const nums = [1, 2, 3];
nums.map(num => num * 10);
nums[0];

// RESULT:
// 1

// In a previous lesson, we built an array of people's names using forEach. Here's that example again.

const people = [
  {name: 'Amir'},
  {name: 'Betty'},
];
const names = [];
people.forEach(person => {
  names.push(person.name);
});
names;

// RESULT:
// ['Amir', 'Betty']

// There's an easier way. With map, we don't need to create and modify a new array. Instead, we can build the new array directly.

const people2 = [
  {name: 'Amir'},
  {name: 'Betty'},
];
people2.map(person => person.name);

// RESULT:
// ['Amir', 'Betty']