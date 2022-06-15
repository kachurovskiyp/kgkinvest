'use strict'
function init () {
    const header = document.querySelector('.header');
    
    if (header) {
        const openMenu = function (evt) {
            evt.preventDefault();
            menu.classList.toggle('header__navigation--opened');
            menuBtn.classList.toggle('header__menu-btn--opened');
        };

        const menu = document.querySelector('.header__navigation');
        const menuBtn = document.querySelector('.header__menu-btn');

        menu.classList.remove('header__navigation--no-js');
        menuBtn.classList.remove('header__menu-btn--no-js');

        menuBtn.addEventListener('click', openMenu);
        
    }
};

init();