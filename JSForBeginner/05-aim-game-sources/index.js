// @ts-nocheck
const start = document.querySelector('.start');
// @ts-ignore
const screen = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const time = document.querySelector('#time');
const board = document.querySelector('.board');
let score = 0;
let times = 0;
const colors = [
  'yellow',
  'darkblue',
  'purple',
  'lime',
  'white',
  'gray',
  'gold',
  'pink',
  'Salmon',
  'DeepSkyBlue',
  'Teal',
  '#fff',
  'purple',
  'darkblue',
  'gold',
  'rgb(100,100,100, 0.4)',
];

start.addEventListener('click', (evt) => {
  evt.preventDefault();
  screen[0].classList.add('up');
});

timeList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('time-btn')) {
    times = parseInt(evt.target.getAttribute('data-time'));
    screen[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('circle')) {
    score++;
    // @ts-ignore
    evt.target.remove();
    createRandom();
  }
});

function startGame() {
  setInterval(decTime, 1000);
  createRandom();
  setTime(times);
}

function decTime() {
  if (times === 0) {
    endGame();
  } else {
    let current = --times;
    if (current < 10) {
      // @ts-ignore
      current = `0${current}`;
    }
    setTime(current);
  }
}

/**
 * @param {number} value
 */
function setTime(value) {
  time.innerHTML = `00:${value}`;
}

function endGame() {
  time.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
}

function createRandom() {
  const circle = document.createElement('div');
  const size = randomNum(10, 35);
  const { width, height } = board.getBoundingClientRect();
  const x = randomNum(0, width - size);
  const y = randomNum(0, height - size);
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.backgroundColor = randomColor();
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  board.append(circle);
}

/**
 * @param {number} min
 * @param {number} max
 */
function randomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
