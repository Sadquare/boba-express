let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menu.classList.toggle('open');
    navlist.classList.toggle('open'); // Assure-toi que la classe 'open' est ajoutée à '.navlist'
}