const menu = document.querySelector('.menu')
const menuItem = document.querySelector('.header__nav-list')
const portfolio = document.querySelector('.portfolio__information')
const buttonActive = document.querySelector('.button__active')

menu.addEventListener('click',()=>{
    menuItem.classList.toggle('active');
})
buttonActive.addEventListener('click',()=>{
    menu.classList.toggle('button__active');
})