let gallery = document.getElementById('wrapper-modal-gallery')
let itemGallery = document.querySelectorAll('.galeria-item')
let closeModal = document.getElementById('close')

itemGallery.forEach(item => {

    let url = item.firstElementChild.getAttribute('src');

    item.addEventListener('click', () => {

        gallery.classList.add('active')
        document.querySelector('.modal-gallery__img').src = url

    })
})

gallery.addEventListener('click', function (fuera) {
    if (fuera.target.id == "wrapper-modal-gallery") {
        gallery.classList.remove('active')
    }
})

closeModal.addEventListener('click', () => {
    gallery.classList.remove('active')
})
/* ------------------- OFERTAS ACTIVE ------------------- */

let ofertas = document.querySelectorAll('.tarjeta-oferta')

ofertas.forEach(oferta => {
    oferta.addEventListener('click', () => {
        oferta.classList.toggle('active')
    })
})