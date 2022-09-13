// JavaScript Arrays: Review
// It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.
// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

const orig = ['a', 'b', 'c'];
const copy = orig.slice();
copy[0] = 'x';
orig;
// RESULT:
// ['a', 'b', 'c']
// LESSON:
// Slice

const a = ['Amir', 'Betty'];
a.pop();
a;
RESULT:
['Amir']
// LESSON:
// Stack

const b = [false, false];
b.push(true);
b;
RESULT:
[false, false, true]
// LESSON:
// Stack

['a', 'b', 'c', 'd', 'e', 'f'].slice(2, 4);
RESULT:
['c', 'd']
// LESSON:
// Slice

const c = ['Amir', 'Betty'];
c.pop();
RESULT:
'Betty'
// LESSON:
// Stack

const d = [true];
d.push(false);
RESULT:
2
// LESSON:
// Stack

['Amir', 'Betty', 'Cindy'].slice(2);
// RESULT:
// ['Cindy']
// LESSON:
// Slice

['a', 'b', 'c'].slice(2000, 3000);
// RESULT:
// []