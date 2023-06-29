// Animación con el plugin Anime.js
let boton = document.querySelector('#boton-sobremi')
let foto = document.querySelector('.foto')
let texto = document.querySelector('.texto')
let card = document.querySelector('.texto-sobremi')
let wholeCard = document.querySelector('.sobremi-card')
let coltexto = document.querySelector('#col-texto')
$(document).ready(function(){
    console.log(window.innerWidth)
    console.log(window.location.search)
})
let animate = anime({
    targets: [boton],
    duration: 800,
    delay: 100,
    endDelay: 1000,
    easing: 'easeInOutSine',

    translateY: 200,
    translateX: -90,
    rotate: '1turn',
    loop: 1,
    direction: 'alternate',
    autoplay: false
})
let animate2 = anime({
    targets: [wholeCard],
    duration: 1000,
    delay: 100,
    endDelay: 1000,
    loop: 1,
    direction: 'alternate',
    easing: 'easeInOutSine',
    paddingTop: 200,
    paddingBottom: 200,
    backgroundColor: '#252525',
    color: '#fff',
    scale: [1.3, 0.2, 1],
    rotate: '2turn',
    autoplay: false
})
let animate3 = anime({
    targets: [card],
    duration: 1000,
    delay: 100,
    endDelay: 1000,
    loop: 1,
    direction: 'alternate',
    easing: 'easeInOutSine',
    translateX: -220,
    translateY: 200,
    autoplay: false,
})
let animate4 = anime({
    targets: [foto],
    duration: 1000,
    delay: 100,
    endDelay: 1000,
    loop: 1,
    direction: 'alternate',
    easing: 'easeInOutSine',
    translateX: 280,
    translateY: -280,
    autoplay: false
})
boton.addEventListener('click', function() {
    animate.play()
    animate2.play()
    animate3.play()
    animate4.play()
}) 
/* Esto es para que el objeto se anime solo cuando se haga scroll, cuando el elemento esté en la pantalla este se animará
el único inconveniente es que si se scrollea mucho sobre el elemento la animación puede buguearse */

function elementoVisible() {
    let posicion = wholeCard.getBoundingClientRect();
    return (
        posicion.top >= 0 &&
        posicion.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function activarAnime() {
    if (elementoVisible()) {
        animate.play()
        animate2.play()
        animate3.play()
        animate4.play()
    }
}
window.addEventListener('scroll', activarAnime)

// El carousel de los proyectos
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:20,
        nav: true,
        responsive: {
            0 : {
                items:1,
                nav:true
            },
            // breakpoint from 480 up
            480 : {
                items:1,
                nav:true
            },
            // breakpoint from 768 up
            768 : {
                items:2,
                nav: true
            },
            1200 : {
                items:3,
                nav: true
            }
        }
    });
  });
 // Y el fancybox de esa sección
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
