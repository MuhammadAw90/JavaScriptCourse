// JavaScript Arrays: Stack
// We can add elements to the end of an array with push.

const a = [1, 2];
a.push(3);
a;
// RESULT:
// [1, 2, 3]
// push returns the array's length, including the newly-pushed element.

const b = ['a', 'b'];
b.push('c');
// RESULT:
// 3

const c = ['a', 'b', 'c', 'd'];
c.push('e');
// RESULT:
// 5
// pop is the opposite of push. It removes the last element from the array.

const d = [1, 2, 3];
d.pop();
d;
// RESULT:
// [1, 2]
// pop returns the element that was removed.

const e = [1, 2, 3];
e.pop();
// RESULT:
// 3
// If the array is empty, pop returns undefined, because there's nothing to remove. This mirrors the way that array indexing works: if we ask for any index of an empty array, we get undefined.

const f = [];
f[0];
// RESULT:
// undefined

const j = [];
j.pop();
// RESULT:
// undefined
// Some array methods return a new array. push and pop do not. Instead, they change the array itself each time they're called.

const h = [1, 2, 3];
h.pop();
h.pop();
h;
// RESULT:
// [1]

const i = [1, 2, 3];
i.pop();
i.push('a');
i;
// RESULT:
// [1, 2, 'a']
// Please help us by rating this lesson! (This is optional.)