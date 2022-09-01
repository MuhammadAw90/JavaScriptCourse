//JavaScript Arrays: Basics
//The Execute Program Terminal works a bit like a typical command line. Code is shown at the > prompt, followed by its result:

1 + 1;
RESULT:2
//We'll often show you some code and ask you what its result is. Here's an easy one. Enter the result of 2 + 2. You can hit enter to run your answer. (Enter also works for the "Continue" buttons.)

2 + 2;
RESULT:4
//You'll see strings, arrays, etc., not just numbers. Always type the result value as it would be typed in code. For example, 'a' + 'b' is 'ab' (including the quotes). And [1 + 1] is [2] (including the square brackets).

[1 + 1];
RESULT:[2]
//Sometimes, you'll see code that's more than one line long. Always enter the value of the last line. For example, here the last value is the variable aAndB. You should type the value held by aAndB.

let aAndB = 'a' + 'b';
aAndB;
RESULT:'ab'

//Now that we've shown you how to answer our prompts, here's the "Basics" lesson from the JavaScript Arrays course:
//This course assumes that you know some basic JavaScript concepts. (You can also look them up as you go; there aren't many!) Here's a list of concepts that we use but don't explain:

//null and undefined.
//Variable definitions with let and const.
//Conditionals (if) and ternary conditionals (a ? y : b).
//C-style for loops: for (let i=0; i<10; i++) { ... }.
//Regular functions: function f() { ... }.
//Arrow functions: const f = () => { ... }.
//This course covers all of the methods on JavaScript arrays. Arrays are sequences of values that have a specific order and a length.

['a', 'b', 'c'].length;
RESULT:3

//[].length;
RESULT:0
//Values can be retrieved from an array using []. Indexes start at 0.


['a', 'b', 'c'][0];
RESULT:'a'


['a', 'b', 'c'][2];
RESULT:'c'

//If we try to access an index that's not in the array, we get undefined.

['a', 'b', 'c'][14];
RESULT:undefined

//We can replace array elements with [] and =.

const strings = ['a', 'b', 'c'];
strings[2] = 'x';
strings;
RESULT:
['a', 'b', 'x']