/*=============== SHOW MENU ===============*/

const blurHeader = () => {
    const header =document.getElementById('header')
  
    this.scrollY >= 50  ? header.classList.add('blur-header') 
                        : header.classList.remove('blur-header')}
  
  
  // Inicializa la vista mostrando la primera tarjeta
  updateSlider();
  
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')        
    
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navClose.addEventListener('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    toggle.addEventListener('click', () =>{
        nav.classList.toogle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')


/*=============== GSAP ANIMATION ===============*/

gsap.from('.home__images', 1.5, {
    opacity:0, y:150, delay: .1
})
gsap.from('.home__data', 1.8, {
    opacity:0, x:-100, delay: .8
})
gsap.from('.home__info', 1.8, {
    opacity:0, x:-100, delay: 1
})


