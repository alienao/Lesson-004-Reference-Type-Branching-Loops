//try to write a the following loop with while and do-while:
// for (var i = 0; i < a.length; i++) {
//     console.log("for", i, a[i]);
//     }

//while
var i = 0;
while (i < a.length) {
  console.log("for", i, a[i]);
  i++;
}

// do-while
var i = 0;
do {
  console.log("for", i, a[i]);
  i++;
} while (i < a.length);
