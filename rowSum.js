let matrix = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];

let rowSum = matrix.map((matrixRow) => matrixRow.reduce((a, b) => a + b));
console.log(rowSum);
