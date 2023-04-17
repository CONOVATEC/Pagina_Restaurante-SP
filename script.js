//Boton menu celulares------------------------------------>

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})



//Carrusel------------------------------------------------>

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
// carrusel comentarios-nosotros
const carruselItems = document.querySelector('.comentarios-container');
const carruselControls = document.querySelectorAll('.comentario-slider-rounded__round');
let autoSlideInterval;

const autoSlide=()=>{
    const activeControl=document.querySelector('.comentario-slider-rounded__round.active')
    const nextIndex= (parseInt(activeControl.dataset.index)+1) % carruselControls.length
    carruselItems.style.transform=`translateX(-${nextIndex*33.333}%)`
    carruselControls.forEach(control=>control.classList.remove("active"))
    carruselControls[nextIndex].classList.add("active")
}
const closeInterval=()=> clearInterval(autoSlideInterval)
carruselControls.forEach((control) => {
    control.addEventListener('click', (e) => {
        const clickedIndex = parseInt(e.target.dataset.index);
        carruselItems.style.transform = `translateX(-${clickedIndex * 33.333}%)`;
        carruselControls.forEach((ctrl) => ctrl.classList.remove('active'));
        control.classList.add('active');
        closeInterval()
    })
})
autoSlideInterval= setInterval(autoSlide,4000)