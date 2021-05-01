// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
// theirlengths.
let arr = ["anymore", "raven", "me", "communicate"];
let max = arr.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});

let min = arr.reduce(function (a, b) {
  return a.length > b.length ? b : a;
});

console.log(max.length + min.length);
