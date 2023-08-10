const menu = document.querySelector('.menu')
const menuItem = document.querySelector('.header__nav-list')
const portfolio = document.querySelector('.portfolio__information')
const buttonActive = document.querySelector('.button__active')

menu.addEventListener('click', () => {
    menuItem.classList.toggle('active');
})
buttonActive.addEventListener('click', () => {
    menu.classList.toggle('button__active');
})

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.name.value
    const phone = form.elements.phone.value
    const message = form.elements.message.value

    const messageMail =`
    Name: ${name}
    Phone: ${phone}
    Message: ${message}
    `;
    console.log(messageMail);


    const TOKEN = "6690576529:AAEcP9kk4ulyZuWT5U_M2xXfYI8gpRM-pXE";
    const URI_API="";
    const ID="";
})