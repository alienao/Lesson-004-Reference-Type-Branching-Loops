// Given three numbers. Sort them bnumber2 the ascending order.
let number1 = +prompt("Enter a number", "");
let number2 = +prompt("Enter a number", "");
let number3 = +prompt("Enter a number", "");

let sorted = [number1, number2, number3].sort(function (a, b) {
  return a - b;
});
console.log("sorted: ", sorted.join(" "));
