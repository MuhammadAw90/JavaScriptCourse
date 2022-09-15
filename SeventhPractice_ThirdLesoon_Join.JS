// JavaScript Arrays: Join
// Sometimes we want to turn an array of strings into a single string. We can join them together.

['a', 'b', 'c'].join('');

// RESULT:
// 'abc'

['Amir', 'Betty'].join('');

// RESULT:
// 'AmirBetty'

// If we omit join's argument, the strings are joined with ',' by default.

['Amir', 'Betty'].join();

// RESULT:
// 'Amir,Betty'

// join's argument is the string to put between each array element. It can be any string.

['a', 'b', 'c'].join('x');

// RESULT:
// 'axbxc'

['a', 'b', 'c'].join('AND');

// RESULT:
// 'aANDbANDc'

// There's nothing special about joining empty strings. If we join some empty strings together, we get a string of only commas. Think about it as: the string has all of the commas in the original array.

['', ''].join();

// RESULT:
// ','

['', '', ''].join();

// RESULT:
// ',,'

['a', '', 'b'].join();

// RESULT:
// 'a,,b'

// null and undefined become empty strings when joined.

[null, undefined].join();

// RESULT:
// ','

['a', null, undefined, 'b'].join();

// RESULT:
// 'a,,,b'

// join can be used to build a large string using short lines of code.

function userTag(name) {
  return [
    '<User name="',
    name,
    '">'
  ].join('');
}
userTag('Amir');
//RESULT:
//'<User name="Amir">'
// We can use join to build a properly formatted English list of words.

const foods2 = ['peas', 'carrots', 'potatoes'];
foods2.slice(0, -1);

// RESULT:
// ['peas', 'carrots']

const foods = ['peas', 'carrots', 'potatoes'];
const joined = [
  foods.slice(0, -1).join(', '),
  ', and ',
  foods[foods.length - 1],
].join('');
joined;

// RESULT:
// 'peas, carrots, and potatoes'