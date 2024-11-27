const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('.ancora-vertical');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('clicked');
    menu.classList.toggle('hidden');
})
