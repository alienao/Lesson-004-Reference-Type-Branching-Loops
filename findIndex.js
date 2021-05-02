// Given an array of numbers and a number. Find the index of a first element which is equal to that number.
// If there is not such a number, that find the index of the first element which is the closest to it.
// let arr = [21, -9, 15, 2116, -71, 33];
// let number = -71;
// let arr = [36, -12, 47, -58, 148, -55, -19, 10];
// let number = -56;

let inputArr = [36, -12, 47, -58, 148, -55, -19, 10];
let search = -55;
let min = Math.min();
let result = 0;
for (i = 0; i < inputArr.length; i++) {
  let absVal = Math.abs(search - inputArr[i]);
  if (min > absVal) {
    min = absVal;
    result = inputArr[i];
  }
}
let index = inputArr.indexOf(result);
console.log(index);
