/* UNIQUE OUTPUT BEHAVIOR PER
- VAR
- LET
- CONST
 */

function mysteryScoping1() {
  var x = "out of block";
  if (true) {
    var x = "in block";
    console.log(x);
  }
  console.log(x);
}
// mysteryScoping1();

const x = "out of function";
function mysteryScoping2() {
  const x = "out of block";
  if (true) {
    const x = "in block";
    console.log(x);
  }
  console.log(x);
}
// mysteryScoping2();

function mysteryScoping3() {
  const x = "out of block";
  if (true) {
    var x = "in block";
    console.log(x);
  }
  console.log(x);
}
// mysteryScoping3();

function mysteryScoping4() {
  let x = "out of block";
  if (true) {
    let x = "in block";
    console.log(x);
  }
  console.log(x);
}
// mysteryScoping4();

function mysteryScoping5() {
  let x = "out of block";
  if (true) {
    x = "in block";
    console.log(x);
  }
  x = "out of block again";
  console.log(x);
}
// mysteryScoping5();
