// JavaScript Arrays: Review
// It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.
// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

const orig = [true, false];
const copy = orig.slice();
copy[0] = false;

// orig;
// RESULT:

// [true, false]
// LESSON:
// Slice

[true, true, true, true, false].slice(3);

// RESULT:
// [true, false]

// LESSON:
// Slice

const a = ['Amir', 'Betty'];
a.push('Cindy');
a;

// RESULT:
// ['Amir', 'Betty', 'Cindy']

// LESSON:
// Stack

const b = [true, false, true, false];
b.pop();

// RESULT:
// false

// LESSON:
// Stack

[true, false, true, false].slice(0, 3);

// RESULT:
// [true, false, true]

// LESSON:
// Slice

const c = [true, false, true, false];
c.pop();
c;

// RESULT:
// [true, false, true]

// LESSON:
// Stack

const d = [];
d.push(null);

// RESULT:
// 1