//Find the sign of product of three numbers without multiplication operator. Display the specified sign.
let number1 = +prompt("Enter a number", "");
let number2 = +prompt("Enter a number", "");
let number3 = +prompt("Enter a number", "");
if (number1 === 0 || number2 === 0 || number3 === 0) {
  console.log("unsigned");
} else if (number1 > 0 && number2 > 0 && number3 > 0) {
  console.log("+");
} else if (number1 > 0 && number2 < 0 && number3 < 0) {
  console.log("+");
} else if (number1 < 0 && number2 < 0 && number3 > 0) {
  console.log("+");
} else if (number1 < 0 && number2 > 0 && number3 < 0) {
  console.log("+");
} else {
  console.log("-");
}
