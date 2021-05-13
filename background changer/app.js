const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'gold',
  'silver', 'black', 'indigo', 'indigo', 'snow', 'burlywood', 'brown', 'skyblue'
];

const bg = document.getElementById('body');
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');
const chColor = document.querySelector('.changedColor')
let color = colors.length - 1;

nextbtn.addEventListener('click', nextColor);
prevbtn.addEventListener('click', prevColor);

function nextColor() {
  if (color !== colors.length - 1) {
    color++;
  } else {
    color = 0;
  }
  bg.style.backgroundColor = colors[color];
  chColor.innerHTML = colors[color];
}

function prevColor() {
  if (color !== 0) {
    color--;
  } else {
    color = colors.length - 1;
  }
  bg.style.backgroundColor = colors[color];
  chColor.innerHTML = colors[color];
}
