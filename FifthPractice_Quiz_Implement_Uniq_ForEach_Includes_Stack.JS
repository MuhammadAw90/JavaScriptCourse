// Quiz: "Implement uniq"
// This quiz includes topics from these lessons: "For each", "Includes", "Stack". If you find this quiz difficult, revisiting those lessons may help!
// Write a function uniq(arr). It should return a new array without any duplicate values. It should not change the original array.

uniq([1, 2, 3]);
// Expected: [1, 2, 3] OK!


uniq(['a', 'a', 'b']);
// Expected: ['a', 'b'] OK!

uniq([1, 1, 1, 1]);
// Expected: [1] OK!

const array = [1, 1];
uniq(array);
// array.length;
// Expected: 2 OK!


uniq([]);
// Expected: [] OK!

// You must use forEach.
uniq.toString().includes('forEach');
// Expected: true OK!

// You must use includes.
uniq.toString().includes('includes');
// Expected: true OK!

// You must use a stack function.
const code = uniq.toString();
code.includes('push') || code.includes('pop');
// Expected: true OK!

// 8 tests, 0 failures

// My solution
function uniq(arr) {
  const arrNoDuplicate = [];
  arr.forEach(item => {
  if(!(arrNoDuplicate.includes(item)))
    arrNoDuplicate.push(item);
  });
  return arrNoDuplicate;
}

// Authour's solution
function uniq(arr) {
    const newArr = [];
    arr.forEach(e => {
    if(!newArr.includes(e))
    newArr.push(e);
    });
    return newArr;
  }