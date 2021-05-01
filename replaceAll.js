// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
// from the array
function replace(str, arr) {
  let newStr = "";
  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      newStr += arr[idx];
      idx++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(replace("_, we have a _.", ["Houston", "problem"]));
