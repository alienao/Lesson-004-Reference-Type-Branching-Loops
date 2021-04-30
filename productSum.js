// . Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
// print the quotient, otherwise print the remainder.
let number = prompt("Enter a number", "");
let numArr = number.split("");
let resultSum = 0;
for (let key of numArr) {
  resultSum = resultSum + parseInt(key);
}
let resultProduct = 1;
for (let key of numArr) {
  resultProduct = resultProduct * parseInt(key);
}
if (number === "0") {
  console.log("Cannot calculate");
} else if (resultProduct % resultSum !== 0) {
  console.log(`‘Quotient is ${resultProduct % resultSum}`);
} else {
  console.log(`‘Remainder is ${resultProduct / resultSum}`);
}
