// JavaScript Arrays: Slice
// Sometimes we want to access a subsection of an array. For that, we use the slice method. It takes an argument begin, which is the index to start from.

[10, 20, 30, 40, 50].slice(3);
// RESULT:
// [40, 50]

['a', 'b', 'c'].slice(1);
// RESULT:
// ['b', 'c']
// slice can take a second argument, end. It slices all elements from begin up to end, but not including end.

[10, 20, 30, 40, 50].slice(1, 2);
// RESULT:
// [20]

[10, 20, 30, 40, 50].slice(1, 3);
// RESULT:
// [20, 30]
// We can slice beyond the end of the array. It gives the same result as slicing right up to the last element.

[10, 20].slice(0, 2);
// RESULT:
// [10, 20]

[10, 20].slice(0, 3);
// RESULT:
// [10, 20]
// If our begin index is past the end of the array, we get an empty result.
// Think of it like this. The array [10, 20] has indexes 0 and 1. So what's in indexes 2 through 3? There's nothing there. The slice of those indexes is empty.

[10, 20].slice(2, 3);
// RESULT:
// []
// With no arguments, slice will slice all elements of the array. This effectively copies the array. If we change the original, it won't affect the copy. Likewise, if we change the copy, it won't affect the original.

const orig = [10, 20, 30];
const copy = orig.slice();
copy[0] = 1;
orig;
// RESULT:
// [10, 20, 30]

const orig2 = [10, 20, 30];
const copy2 = orig2.slice();
orig2[0] = 1;
copy2;
// RESULT:
// [10, 20, 30]
// Slice is quite complex, but copying arrays is its most common use.