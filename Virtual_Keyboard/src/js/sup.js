const background = document.querySelector('.background');
const background_cx = background.getContext('2d');
let background_w;
let background_h;
const cv = document.createElement('canvas');
const cx = cv.getContext('2d');
const cw = (cv.width = 200);
const ch = (cv.height = 200);
const dt = cx.createImageData(cw, ch);
const dd = dt.data;
const dl = dt.width * dt.height;

function generateNoise() {
  let p = 0;
  let i = 0;
  for (; i < dl; ++i) {
    dd[p++] = c = Math.floor(Math.random() * 100);
    dd[p++] = c;
    dd[p++] = c;
    dd[p++] = 325;
  }
  cx.putImageData(dt, 0, 0);
}

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  background_w = background.width = w >> 1;
  background_h = background.height = h >> 1;
  background.style.width = `${w}px`;
  background.style.height = `${h}px`;
}

resize();
window.addEventListener('resize', resize, false);
window.requestAnimationFrame(function () {
  generateNoise();
  background_cx.fillStyle = background_cx.createPattern(cv, 'repeat');
  background_cx.fillRect(0, 0, background_w, background_h);
  window.requestAnimationFrame(arguments.callee);
});

