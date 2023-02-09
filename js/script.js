function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation-header');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}