/**
 * DataType
 */
"use strict"; //treat all js code as newer version

// alert("hello") //using node.js not browser

let name="Lily";
let age=22;
let isloggIn=false;
let userData={
    name:"john",
    email:'john@gmail.com'
}

let fruits=["banana",1,2,3,"vadodara"];

/**
 * 
1. Primitive Data Types 
number
bigint
string
boolean
null :Represents the intentional absence of any object value.
undefine
symbol:A unique and immutable value used for object property keys.
 */
console.log(typeof null); //object
console.log(typeof undefined);//undefine

/**
 * 2. Object
 * 
 * Object:

A collection of properties, where each property has a key and a value.
Example: let obj = { name: "Alice", age: 25 };
Array:

A special type of object used to store ordered collections of values.
Example: let arr = [1, 2, 3, 4];
Function:

A callable object used to perform actions.
Example: function greet() { console.log("Hello!"); }
Date:

An object representing a specific point in time.
Example: let date = new Date();
 */

console.log(typeof userData)//object
console.log(typeof fruits);//object