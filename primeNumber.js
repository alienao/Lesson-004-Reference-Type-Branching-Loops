// Insert a number. Print ‘yesʼ if the numberis prime, ‘noʼ otherwise.
let number = +prompt("Enter a number", "");
let numberSqrt = Math.floor(Math.sqrt(number));
let primeNumber = number != 1;
for (let i = 2; i < numberSqrt + 1; i++) {
  if (number % i == 0) {
    console.log("no");
    break;
  } else {
    console.log("yes");
  }
}
