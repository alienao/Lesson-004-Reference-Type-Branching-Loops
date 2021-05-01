let angle1 = +prompt("Enter an angle1", "");
let angle2 = +prompt("Enter an angle2", "");
let angle3 = 180 - angle1 - angle2;

if (angle1 < 0 || angle2 < 0) {
  console.log("angle cant be negative");
} else if (angle1 === 0 && angle2 === 0) {
  console.log("angle cant be zero");
} else {
  console.log(angle3);
}
