import './view/styles/index.scss'
;(function () {
  // переделать!
  const burgerItem = document.querySelector('.burger')
  const menu = document.querySelector('.header__nav')
  const menuCloseItem = document.querySelector('.header__nav-close')
  const menuLinks = document.querySelectorAll('.header__link')
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active')
  })
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active')
  })
  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav_active')
      })
    }
  }
})()

console.log(
  'Их все равно никто не читает... Но для прочитавших, оставлю. ' +
    'адаптив сдалан частично, т.к. на руках есть таскик поинтересней )' +
    'придержки PixelPerfect нет, потому что сие штука - помойка (имхо). Делалось максимально на глаз.' +
    'также придежки славным традициям делать "правильные" коммиты тут вы не увидите'
)
