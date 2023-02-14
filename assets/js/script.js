function toggleMenu(){
    const menuToggle = document.querySelector('.toggle-navbar');
    const navToggle = document.querySelector('.navbar-hero');
    const closeToggle = document.querySelector('.toggle-navbar-close');

    menuToggle.classList.toggle('active')
    navToggle.classList.toggle('active')
    closeToggle.classList.toggle('active')
}

function trailerModal(){
    const modalTrailer = document.querySelector('.re4-trailer-modal'); 
    modalTrailer.classList.toggle('active')   
}    










