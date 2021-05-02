// Given an array of a size smallerthan 100. It consists of numbers from 0 to 99 in any order. Create a new
// array where each element from that array is placed underthe index of its value. Start from the smallest
// value and end with the biggest one. If there are missing values, put in its places undefined.
let elemArray = [4, 3, 0, 9].sort((a, b) => a - b);

let min = elemArray[0];
let max = elemArray[elemArray.length - 1];

let result = Array(max - min).fill(undefined);
console.log(result);
for (const index of elemArray) {
  result[index - min] = index;
}

console.log(result);
