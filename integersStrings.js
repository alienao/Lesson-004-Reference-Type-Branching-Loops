// Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.

const arr = [1, "10", "hi", 2, 3];

let numbersOnly = (val) => {
  if (typeof val === "number") {
    return val;
  }
};

let numbers = arr.filter(numbersOnly);
console.log(`Numbers: ${numbers.length}`);

let stringsOnly = (val) => {
  if (typeof val === "string") {
    return val;
  }
};

let strings = arr.filter(stringsOnly);
console.log(`Strings: ${strings.length}`);
