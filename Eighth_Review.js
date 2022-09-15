// JavaScript Arrays: Review
// It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.
// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

[true, false].concat([true], [false, true]);

// RESULT:
// [true, false, true, false, true]

// LESSON:
// Concat

[].includes(0);

// RESULT:
// false

// LESSON:
// Includes

new Array(0)[0];

// RESULT:
// undefined

// LESSON:
// New and fill

['Amir', 'Betty', 'Cindy'].includes('Betty');

// RESULT:
// true

// LESSON:
// Includes

new Array(2).fill('Amir');

// RESULT:
// ['Amir', 'Amir']

// LESSON:
// New and fill

const booleans1 = [true];
const booleans2 = [false];
booleans1.concat(booleans2);
booleans1;

// RESULT:
// [true]

// LESSON:
// Concat

['a', 'b', 'c'].slice(-5);

// RESULT:
// ['a', 'b', 'c']

// LESSON:
// Slice with negative arguments

['Amir', 'Betty', 'Cindy', 'Dalili', 'Ebony'].slice(-4, -2);

// RESULT:
// ['Betty', 'Cindy']

// LESSON:
// Slice with negative arguments
