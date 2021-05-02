// Given a sentence as a string. Split it according to space and comma and create an array consisting of the
// words of the array. The last word should not contain the last . or! .
// let str = "May the Force be with you.";
let str = "May the Force be with you";

if (str.endsWith(".") || str.endsWith("!")) {
  let strArr = str.split("");
  let cut = strArr.splice(-1, 1);
  let newArr = strArr.join("").split(" ");
  console.log(newArr);
} else {
  let strArr1 = str.split(" ");
  console.log(strArr1);
}
