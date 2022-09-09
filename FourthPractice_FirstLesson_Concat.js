// JavaScript Arrays: Concat
// In many languages, + will combine two arrays. That's not true in JavaScript. Trying to do array1 + array2 is usually a mistake. JavaScript will convert the arrays into strings before adding them.

[1, 2].toString();
// RESULT:
// '1,2'

[1, 2] + [3];
// RESULT:
// '1,23'

[1, 2] + [3, 4];
// RESULT:
// '1,23,4'
// However, we can combine arrays properly with concat. (It stands for concatenate, which means "link together".) It creates a new array containing all of the elements from the old arrays.

[1, 2].concat([3, 4]);
// RESULT:
// [1, 2, 3, 4]
// concat takes multiple arguments, so we can combine many arrays if needed:

[1, 2].concat([3, 4], [5, 6]);
// RESULT:
// [1, 2, 3, 4, 5, 6]
// concat can also be used to add single elements to the end of an array. If its argument isn't an array, it will be added as a single element.

[1, 2].concat(3);
// RESULT:
// [1, 2, 3]
// concat builds and returns a new array. The original arrays aren't changed.

const numbers1 = [1, 2];
const numbers2 = [3, 4];
numbers1.concat(numbers2);
numbers1;
// RESULT:
// [1, 2]