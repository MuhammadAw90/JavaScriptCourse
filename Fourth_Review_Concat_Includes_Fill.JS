// JavaScript Arrays: Review
// It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.
// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

new Array(1000)[0];
// RESULT:
// undefined
// LESSON:
// New and fill

['a', 'b'].concat(['c'], ['d']);
// RESULT:
// ['a', 'b', 'c', 'd']
// LESSON:
// Concat

[true].includes(false);
// RESULT:
// false
// LESSON:
// Includes

new Array(4).fill(100);
RESULT:
[100, 100, 100, 100]
// LESSON:
// New and fill

[true].includes(true);
RESULT:
true
// LESSON:
// Includes

const letters1 = ['a', 'b'];
const letters2 = ['c', 'd'];
letters1.concat(letters2);
letters1;
// RESULT:
// ['a', 'b']