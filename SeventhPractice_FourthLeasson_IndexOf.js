// JavaScript Arrays: Index of
// We can ask an array for the index of a particular value. (Indexes start at 0, as usual.)

const abc5 = ['a', 'b', 'c'];
abc5.indexOf('a');

// RESULT:
// 0

// If the value occurs multiple times in the array, we'll get the index of the first occurrence.

const abc6 = ['a', 'b', 'c', 'c'];
abc6.indexOf('c');

// RESULT:
// 2

// If we ask for an element that isn't in the array, we get -1.

const abc7 = ['a', 'b', 'c'];
abc7.indexOf('d');

// RESULT:
// -1

// It's important to check your indexOf calls for that -1 return value! Otherwise you can introduce subtle bugs. Here's an example.
// Let's try to slice an array from a certain element forward. We don't check -1 from indexOf, so that -1 might be used as an index. (A hint in case you get stuck: [1, 2, 3].slice(-1) returns [3].)

const abc1 = ['a', 'b', 'c'];
abc1.slice(abc1.indexOf('b'));

// RESULT:
// ['b', 'c']

const abc2 = ['a', 'b', 'c'];
abc2.slice(abc2.indexOf('c'));

// RESULT:
// ['c']

const abc3 = ['a', 'b', 'c'];
abc3.slice(abc3.indexOf('d'));

// RESULT:
// ['c']

// We can fix that bug by checking for -1.


const abc4 = ['a', 'b', 'c'];
function sliceFromElement(array, element) {
  const index = array.indexOf(element);
  if (index === -1) {
    return null;
  } else {
    return array.slice(index);
  }
}
sliceFromElement(abc4, 'd');
// RESULT:
// null