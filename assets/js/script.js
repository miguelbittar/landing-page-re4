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









