// Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
// last digit of the inserted numberis 0, numberremains the same.
let number = prompt("enter number");
let last = number.charAt(number.length - 1);
let cut = number.slice(0, number.length - 1);
if (last === "0") {
  alert(parseInt(number));
} else {
  alert(parseInt(last + cut));
}
