const menuHamb=document.querySelector('.header-right > a');
const CloseBtn=document.querySelector('.close')

menuHamb.addEventListener('click', function(){
    const menuMoblie = document.querySelector('.hamburger-menu');
    menuMoblie.classList.add('active');
});

CloseBtn.addEventListener('click', function(){
    const menuMobile = document.querySelector('.hamburger-menu');
    menuMobile.classList.remove('active');
}); 