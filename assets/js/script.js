//pages navbar

//buttons selected
const homeBtn = document.querySelector('#homeBtn')

//fechar over-menu
const xBtn = document.querySelector('.xBtn')
xBtn.addEventListener('click', function () {document.querySelector('.over-menu').classList.toggle('menu-hidden')})
const burguerMenu = document.querySelector('.menu-burguer')
burguerMenu.addEventListener('click', function () {document.querySelector('.over-menu').classList.toggle('menu-hidden')})

//geolocalização
