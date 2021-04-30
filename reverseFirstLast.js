//Enter a number. Reverse its first and last digits. Print the new number.
let number = 45;
let numStr = number.toString().split("");
let cut = numStr.slice(1, numStr[numStr.length - 1]);
let numRev = numStr.reverse();
let newArr = [];
let final = newArr
  .concat(numRev[0])
  .concat(cut)
  .concat(numRev[numRev.length - 1]);
console.log(final);

// function reverseNum() {
//   let num = prompt("enter number");
//   let first = num.charAt(0);
//   let last = num.charAt(num.length - 1);
//   let cutedStr = num.slice(1, num.length - 1);
//   console.log(parseInt(last + cutedStr + first));
// }
// reverseNum();
