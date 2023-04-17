//Boton menu celulares------------------------------------>

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})



//carousel------------------------------------------------>

const bigContainer = document.querySelector(".big-container");
const point = document.querySelectorAll(".point");

// Cuando CLICK en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al grande
// QUITAR la clase activo de TODOS puntos
// AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
point.forEach((eachPoint, i) => {
    // Asignamos un CLICK a cadaPunto
    point[i].addEventListener("click", () => {

        // Guardar la posición de ese PUNTO
        let position = i;
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operation = position * -50;

        // MOVEMOS el bigContanier
        bigContainer.style.transform = `translateX(${operation}%)`

        // Recorremos TODOS los punto
        point.forEach((eachPoint, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            point[i].classList.remove('active')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        point[i].classList.add('active')

    })
})



//Formulario registro
function register() {
    const name = document.getElementById("form-name").value;const email = document.getElementById("form-email").value;
}
// funcionalidad de un carrusel
function carouselFunctionality(numberItems, carouselSelector,controlsSelector,controlSelectorActivated, activatedClass,autoSlideDelay){
    const carouselItems = document.querySelector(carouselSelector);
    const carouselControls = document.querySelectorAll(controlsSelector);
    let autoSlideInterval;
    let widthPercentageForEachItem= 100/numberItems

    const autoSlide=()=>{
        const activeControl=document.querySelector(controlSelectorActivated)
        const nextIndex= (parseInt(activeControl.dataset.index)+1) % carouselControls.length
        carouselItems.style.transform=`translateX(-${nextIndex * widthPercentageForEachItem}%)`
        carouselControls.forEach(control=>control.classList.remove(activatedClass))
        carouselControls[nextIndex].classList.add(activatedClass)
    }
    const closeInterval=()=> clearInterval(autoSlideInterval)
    carouselControls.forEach((control) => {
        control.addEventListener("click", (e) => {
            const clickedIndex = parseInt(e.target.dataset.index);
            carouselItems.style.transform = `translateX(-${clickedIndex * widthPercentageForEachItem}%)`;
            carouselControls.forEach((ctrl) => ctrl.classList.remove(activatedClass));
            control.classList.add(activatedClass);
            closeInterval()
        })
    })
    autoSlideInterval= setInterval(autoSlide,autoSlideDelay)
}
// Carrusel Nosotros/comentarios
carouselFunctionality(
    3,
    ".comentarios-container",
    ".comentario-slider-rounded__round",
    ".comentario-slider-rounded__round.active",
    "active",
    4000
)
