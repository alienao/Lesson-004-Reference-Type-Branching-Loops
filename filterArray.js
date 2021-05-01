// let arr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
// let someArr = arr.filter((item) => typeof item === "number" && !isNaN(item));
// console.log(someArr);
// let empty = [];
// for (let key of someArr) {
//   if (key % 2 !== 0) {
//     empty.push(key);
//   }
// }
// for (let key of someArr) {
//   if (key % 2 === 0) {
//     empty.push(key);
//   }
// }
// console.log  (empty);

let arr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];

// let someArr = arr.filter((item) => typeof item === "number" && !isNaN(item));
// let res = [];

// for (let item of someArr) {
//   if (item % 2 === 0) {
//     res.push(item);
//   } else {
//     res.unshift(item);
//   }
// }

let result = arr
  .filter((item) => typeof item === "number" && !isNaN(item))
  .reduce((acc, el) => {
    if (el % 2 === 0) {
      return [...acc, el];
    } else {
      return [el, ...acc];
    }
  }, []);

console.log(result);
