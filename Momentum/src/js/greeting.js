export function Greeting () {
  const greeting = document.querySelector('.greeting');
  let timer = new Date(),
    now = timer.getHours();
  if (now < 6) {
    greeting.innerHTML = 'Good night,&nbsp;';
  } else if (now < 12) {
    greeting.innerHTML = 'Good morning,&nbsp;';
  } else if (now < 18) {
    greeting.innerHTML = 'Good afternoon,&nbsp;';
  } else {
    greeting.innerHTML = 'Good evening,&nbsp;';
  }
  setTimeout(Greeting, 1000);
}
