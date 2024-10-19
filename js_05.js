// array
const fruits = [];
fruits.push("banana", "apple", "peach", "");
// console.log(fruits.length); // 3

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// console.log(Array.from('lily'));
// Expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

//array from set
const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(Array.from(set));
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
//   console.log(  Array.from(map));

// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
//   console.log(  Array.from(mapper));

// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

// [ "foo", "bar", "baz" ]
// instance method
//  1.at()
// const array1 = [5, 12, 8, 130, 44];
// let index = -2;
// console.log(`An index of ${index} returns ${array1.at(index)}`);
// console.log(array1[-2]); //undefine

/**
 * 2.concat
    The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 */

const array = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array.concat(array2);
const arr = array2;
arr[1] = "ily";

// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

/**
 *
 * The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
 */
// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);

/**
 * every:The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 */
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));


/**
 * The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 */

// const array5 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const sumWithInitial = array5.reduce(
//   (accumulator, currentValue) => currentValue +accumulator
// );

// console.log(sumWithInitial);
// Expected output: 10


const numbers=[3,4,14,6,"apple","banana"]
console.log("original array",numbers);


const sliceTest=numbers.slice(1,3);//4,14 last index 3 postion will not be inclue
console.log(sliceTest);
console.log("after slice",numbers); //not modify the original array

const spliceTest=numbers.splice(1,3)//
console.log(spliceTest); //4,14,16 include last also
console.log("after splice",numbers); //modify the original array


