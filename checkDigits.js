//Insert a digit and a number. Check whetherthe digits contains in the number or not.
let digit = +prompt("Enter a digit", "");
let number = +prompt("Enter a number", "");
console.log(number.toString().includes(digit));
