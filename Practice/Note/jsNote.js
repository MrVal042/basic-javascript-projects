var x = 3;
var y = 1;
let sh = () => x === 5 ? console.log('true') : console.log('false');

let man = () => {
  if (x === 5) if (x === 6) {
    console.log('x is 6');
  } else {
    console.log('none is true');
  } else {
    console.log('x is not 5');
    if (x === 3 && y === 2) {
      console.log('x is 3 and y is 2');
    } else {
      console.log('both are false');
    }
  }
}
man()