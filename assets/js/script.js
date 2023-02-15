function toggleMenu(){
    const menuToggle = document.querySelector('.toggle-navbar');
    const navToggle = document.querySelector('.navbar-hero');
    const closeToggle = document.querySelector('.toggle-navbar-close');

    menuToggle.classList.toggle('active')
    navToggle.classList.toggle('active')
    closeToggle.classList.toggle('active')
}

function trailerModal(){
    const modalTrailer = document.querySelector('.header-trailer-modal'); 
    const modalTrailerClose = document.querySelector('.close-ico-header-trailer'); 
    modalTrailer.classList.toggle('active')   
    modalTrailerClose.classList.toggle('active')   
}    

/* CHARACTER MENU */

function Show1() {
    document.getElementById('character1').style.display = "block";
    document.getElementById('character2').style.display = "none";
}

function Show2() {
    document.getElementById('character2').style.display = "block";
    document.getElementById('character1').style.display = "none";
}


const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove ('active');
            })
            option.classList.add ('active');
        })
    })


})









