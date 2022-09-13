// Quiz: "Count"
// This quiz includes topics from this lesson: "For each". If you find this quiz difficult, revisiting that lesson may help!
// Use forEach to write a function count(arr, callback). It should return the number of elements for which callback is true.

count([1, 2, 3, 4], (e) => e === 3);
// Expected: 1 OK!

count([1, 2, 3, 4], (e) => e > 1);
//Expected: 3 OK!

count([2, 1, 4, 5, 2, 8], (e) => e === 2);
//Expected: 2 OK!

count(['a', 'b'], (e) => e === 'd');
//Expected: 0 OK!

count([], (e) => e === 'd');
//Expected: 0 OK!

// You must use forEach.
count.toString().includes('forEach');
//Expected: true OK!

//6 tests, 0 failures

//My solution
function count(arr, callback) {
  let values = 0
  arr.forEach((item) => {
    callback(item) ? values++ : values + 0
  })
​
  return values
}

//Author's solution
function count(arr, callback) {
    let values = 0
    arr.forEach((e) => {
      if(callback(item)){
        count+=1;
    }
  ​});
    return values
}