// Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1
//     + ak-2)
function fib(n) {
  let number1 = 1;
  let number2 = 1;
  for (let i = 3; i <= n; i++) {
    let number3 = number1 + number2;
    number1 = number2;
    number2 = number3;
  }
  return number2;
}
