// Otro método GET que fue para las galerias, me quedé sin ideas xd
$.get({
    url: "assets/js/imgs-galeria.json",
    dataType: "json",
    success: function(respuesta) {
        $.each(respuesta.referencia, function(index, imagen) {
            console.log(respuesta.referencia[0].img4);
            let caja;
            caja = '<div class="col-sm-12 col-md-6 col-lg-4 mx-auto mb-5" data-aos="flip-up" data-aos-duration="800">'
                caja += '<div class="row gap-3 position-relative">'
                    caja += '<a class="hover-galeria" href="' + imagen.imgref + '" data-bs-toggle="modal" data-bs-target="#modal-galeria" data-titulo="' + imagen.nombre + '" data-descripcion="' + imagen.descripcion + '" data-img1="' + imagen.img1 + '" data-img2="' + imagen.img2 + '" data-img3="' + imagen.img3 + '" data-img4="' + imagen.img4 + '" data-curioso="' + imagen.curioso + '">'
                    caja += '<img class="w-100 h-100 rounded" src="' + imagen.imgref + '" alt="imagenref">'
                    caja += '<h6 class="nombre-item position-absolute top-50 start-50 translate-middle text.center">' + imagen.nombre + '</h6>'
                    caja += '</a>'
                caja += '</div>'
            caja += '</div>'
        $('#images-row').append(caja);
                
        })},
    error: function() {
            alert('no hay nada bro xd')
    } 
})
//Otro modal para las galerias
const modalGaleria = document.getElementById('modal-galeria')

modalGaleria.addEventListener('show.bs.modal', event =>{
    let boton = event.relatedTarget;
    let nombre = boton.getAttribute('data-titulo')
    let descripcion = boton.getAttribute('data-descripcion')
    let curioso = boton.getAttribute('data-curioso')
    document.querySelector('.dato-modal-gal').innerHTML = curioso
    document.querySelector('#title-galeria').innerHTML = nombre
    document.querySelector('.descripcion-modal-gal').innerHTML = descripcion
    let img1 = boton.getAttribute('data-img1')
    let img2 = boton.getAttribute('data-img2')
    let img3 = boton.getAttribute('data-img3')
    let img4 = boton.getAttribute('data-img4')
    document.querySelector('.link-fancy1').setAttribute('src', img1)
    document.querySelector('.link-fancy2').setAttribute('src', img2)
    document.querySelector('.link-fancy3').setAttribute('src', img3)
    document.querySelector('.link-fancy4').setAttribute('src', img4)
    const galeriaModalBody = document.getElementById('modal-body-gal');
    $('.modal-content').css({"background-color": "#252525", "color": "white"})

})
// Carousel dentro del modal (quería usar el fancybox pero se rompía todo así que me arrepentí)
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
                items:1,
                nav: true
            },
            1200 : {
                items:1,
                nav: true
            }
        }
    });
  });