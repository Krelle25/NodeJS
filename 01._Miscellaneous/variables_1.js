// Node REPL

// type coercion
// strict equality

// Rule 1: use const per default unless it need to change, then use let

// const is constant in the assignment

const luckyNumber = 4;

console.log(luckyNumber);

// JS Data types
// String, Boolean, Number, BigInt, Object, Symbol, null, undefined
// Difference between JSON and a JS-object is that: JSON uses "" on the key while JS-object doesnt use "" on the key

const person = {
    // key-value pair
    name: "Kristian"
};

person.name = "Knud"

person.age = 100;

console.log(person);

const people = [];

people.push("Krelle");

console.log(people);

// ASI = Automatic Semicolon Insertion

// How to define string in JS:
// ""
// ''
// ``

