/* ------------------- ANMACION SCROLL ------------------ */
let animationFadeIn = document.querySelectorAll('.animation-fadeIn')
let animationFadeInLeft = document.querySelectorAll('.animation-fadeInLeft')
let animationFadeInRight = document.querySelectorAll('.animation-fadeInRight')
let animationFadeInTop = document.querySelectorAll('.animation-fadeInTop')
let animationFadeInBottom = document.querySelectorAll('.animation-fadeInBottom')


// Esta es la funcion o el colback que se usara para filtrar los tipos de animaciones recibidos
const animationInit = (entrada) => {

    entrada.forEach(element => {

        if (element.isIntersecting) {
            if (element.target.classList.contains('animation-fadeInTop')) {
                element.target.style.animation = "fadeInTop 1.7s ease-in-out"
            }
            if (element.target.classList.contains('animation-fadeInBottom')) {
                element.target.style.animation = "fadeInBottom 1.7s ease-in-out"
            }
            if (element.target.classList.contains('animation-fadeInRight')) {
                element.target.style.animation = "fadeInRight 1.7s ease-in-out"
            }
            if (element.target.classList.contains('animation-fadeInLeft')) {
                element.target.style.animation = "fadeInLeft 1.7s ease-in-out"
            }
            if (element.target.classList.contains('animation-fadeIn')) {
                element.target.style.animation = "fadeIn 1.7s ease-in-out"
            }
        }
    });
}

// Hacemos uso de IntersectionObserver para que de seguimiento a todas las clases animation encontradas en el html, esta recibe 2 parametros el callback que se hara cuando se localice el objeto y los parametros de intersectionObserver

const observerScroll = new IntersectionObserver(animationInit, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
});


animationFadeInTop.forEach(item => {
    observerScroll.observe(item)
})
animationFadeInBottom.forEach(item => {
    observerScroll.observe(item)
})
animationFadeInRight.forEach(item => {
    observerScroll.observe(item)
})
animationFadeInLeft.forEach(item => {
    observerScroll.observe(item)
})
animationFadeIn.forEach(item => {
    observerScroll.observe(item)
})



/* ---------------------- GO BOTTOM --------------------- */

let downArrow = document.getElementById('down-arrow')
let sectionsHTML = document.querySelectorAll('section')
let firsSecctionHeight = sectionsHTML[0].clientHeight + 120

console.log(firsSecctionHeight);
downArrow.addEventListener('click', () => {
    window.scrollTo({
        left: 0,
        top: firsSecctionHeight,
        behavior: "smooth"
    })
})