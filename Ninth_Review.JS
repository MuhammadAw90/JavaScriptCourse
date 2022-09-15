// JavaScript Arrays: Review
// It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.
// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

const nums = [4, 5, 6];
let sum = 0;
nums.forEach(num => {
  sum = sum + num;
});
sum;

// RESULT:
// 15

// LESSON:
// For each

const people = [
  {name: 'Cindy'},
  {name: 'Dalili'},
];
const names = [];
people.forEach(person => {
  names.push(person.name);
});
names;

// RESULT:
// ['Cindy', 'Dalili']