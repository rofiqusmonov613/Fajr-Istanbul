let hamburger = document.querySelector('.header__icon')
let modal = document.querySelector('.modal')
let modalx = document.querySelector('.modal__x')


hamburger.addEventListener('click', function() {
    modal.classList.add('ochilish')
})
modalx.addEventListener('click',function() {
    modal.classList.remove('ochilish')
})