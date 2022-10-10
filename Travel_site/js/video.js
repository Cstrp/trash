function togglePlay() {
  const e = video.paused ? "play" : "pause";
  video[e]();
}
function videoMute() {
  let e;
  0 == video.volume
    ? ((e = "./assets/svg/volume.svg"),
      (mute.style.backgroundImage = `url(${e})`),
      (video.volume = progressSound.value / 100))
    : ((e = "./assets/svg/mute-sound.svg"),
      (mute.style.backgroundImage = `url(${e})`),
      (video.volume = 0));
}
function videoChangeVolume() {
  handleSoundUpdate();
  let e = progressSound.value / 100;
  (video.volume = e),
    0 == video.volume
      ? ((iconSrc = "./assets/svg/mute-sound.svg"),
        (mute.style.backgroundImage = `url(${iconSrc})`))
      : ((iconSrc = "./assets/svg/Volume.svg"),
        (mute.style.backgroundImage = `url(${iconSrc})`));
}
function videoChangeSpeed(e) {
  "+" === e && video.playbackRate < 2 && (video.playbackRate += 0.25),
    "-" === e && video.playbackRate > 0.25 && (video.playbackRate -= 0.25);
}
function togglePlayButton() {
  const e = this.paused
    ? "./assets/svg/pause-video.svg"
    : "./assets/svg/pause-video.svg";
  playButton.style.backgroundImage = `url(${e})`;
}
function skip(e) {
  video.currentTime += parseFloat(e);
}
function keyPress(e) {
  switch (e.code) {
    case "KeyP":
      toggleVideo("prev");
      break;
    case "KeyN":
      toggleVideo("next");
      break;
    case "Period":
      videoChangeSpeed("+");
      break;
    case "Comma":
      videoChangeSpeed("-");
      break;
    case "KeyJ":
      skip(-10);
      break;
    case "KeyL":
      skip(10);
      break;
    case "KeyK":
    case "Space":
      togglePlay();
      break;
    case "KeyF":
      toggleFullScreen();
      break;
    case "KeyM":
      videoMute();
  }
}
function toggleFullScreen() {
  let e;
  document.fullscreenElement
    ? ((e = "./assets/svg/FullScreen.svg"),
      (frameToggle.style.backgroundImage = `url(${e})`),
      document.exitFullscreen())
    : ((e = "./assets/svg/FullScreen.svg"),
      (frameToggle.style.backgroundImage = `url(${e})`),
      player.requestFullscreen());
}
function toggleVideo(e) {
  "next" === e &&
    (curentVideo < 4
      ? (curentVideo++,
        (prevVideo.disabled = !1),
        (nextVideo.disabled = !1),
        (video.currentTime = 0),
        (video.src = `assets/video/video${curentVideo}.mp4`),
        (video.poster = `assets/video/poster${curentVideo}.jpg`))
      : (nextVideo.disabled = !0)),
    "prev" === e &&
      (curentVideo > 0
        ? ((prevVideo.disabled = !1),
          (nextVideo.disabled = !1),
          curentVideo--,
          (video.currentTime = 0),
          (video.src = `assets/video/video${curentVideo}.mp4`),
          (video.poster = `assets/video/poster${curentVideo}.jpg`))
        : (prevVideo.disabled = !0));
}
function handleRangeUpdate() {
  const e = (video.currentTime / video.duration) * 100;
  (progressVideo.value = e),
    (progressVideo.style.background = `linear-gradient( to right, #24809e 0%, #24809e ${e}%, #c4c4c4 ${e}%, #c4c4c4 100% )`);
}
function handleSoundUpdate() {
  const e = progressSound.value;
  progressSound.style.background = `linear-gradient( to right, #24809e 0%, #24809e ${e}%, #c4c4c4 ${e}%, #c4c4c4 100% )`;
}
function scrub(e) {
  const o = (e.offsetX / progressVideo.offsetWidth) * video.duration;
  (video.currentTime = o), handleRangeUpdate();
}
const player = document.querySelector(".video-container"),
  video = player.querySelector(".video-frame"),
  playButton = player.querySelector(".play-video"),
  progressVideo = player.querySelector(".progress-video"),
  frameToggle = player.querySelector(".frame-video"),
  videoBar = player.querySelector(".video-bar"),
  progressSound = player.querySelector(".progress-value"),
  mute = player.querySelector(".mute-video"),
  nextVideo = player.querySelector(".next-video"),
  prevVideo = player.querySelector(".prev-video");
let curentVideo = 0;
frameToggle.addEventListener("click", toggleFullScreen),
  video.addEventListener("click", togglePlay),
  video.addEventListener("play", togglePlayButton),
  video.addEventListener("pause", togglePlayButton),
  playButton.addEventListener("click", togglePlay),
  document.addEventListener("keydown", keyPress),
  video.addEventListener("timeupdate", handleRangeUpdate),
  progressVideo.addEventListener("click", scrub);
let mousedown = !1;
progressVideo.addEventListener("mousedown", () => (mousedown = !0)),
  progressVideo.addEventListener("mousemove", (e) => mousedown && scrub(e)),
  progressVideo.addEventListener("mouseup", () => (mousedown = !1)),
  mute.addEventListener("click", videoMute),
  progressSound.addEventListener("change", videoChangeVolume),
  progressSound.addEventListener("mousemove", handleSoundUpdate),
  nextVideo.addEventListener("click", () => toggleVideo("next")),
  prevVideo.addEventListener("click", () => toggleVideo("prev"));
