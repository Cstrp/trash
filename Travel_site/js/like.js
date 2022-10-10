// let btn = document.querySelector('.like');
// let like = true,
//     likeCount = document.querySelector('.total').innerHTML;

  
// btn.addEventListener('click', () => {
//   likeCount = like ? ++likeCount : --likeCount;
//   like = !like;
//   document.querySelector('.total').innerHTML = likeCount;
// }); считывает только с одного блока и делает +1 -1 при нажатии

const btns = document.querySelectorAll('.like');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (ev) {
          const direction = ev.target.classList.contains('up') ? true : false;
          const count = ev.target.parentElement.parentElement.querySelector('.total');
          let counting = count.innerHTML;
          counting = parseInt(counting) + (direction ? 1 : +1); // бессконечное количество лайков, без возможности забрать их
          count.innerHTML = counting;
      })
};

localStorage.setItem('key', btns);
console.log(localStorage.getItem('key', JSON.stringify(btns)));






