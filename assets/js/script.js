// Mas recientes usando metodo GET con JSON
$.get({
    url: "assets/js/blogs_inicio.json",
    dataType: "json",
    success: function(respuesta) {
        $.each(respuesta.blogs, function(index, blog) {
            console.log(respuesta.blogs[0].id);
            let caja;
            caja = '<div class="col-sm-12 col-md-6 col-lg-4 mx-auto mb-5" data-aos="flip-left" data-aos-duration="800">'
            caja += '<div class="row gap-3">'
                caja += '<a class="cajas hover-cajas" href="#modalInicio" data-bs-toggle="modal" data-bs-target="#modalInicio" data-titulo="' + blog.titulo + '" data-descripcion-uno="' + blog.descripcion1 + '" data-descripcion-dos="' + blog.descripcion2 + '" data-img1="' + blog.imagen1 + '" data-img2="' + blog.imagen2 + '" data-img3="' + blog.imagen3 + '">';
                    caja += '<img class="img-fluid mb-5" src="' + blog.link + '" alt="imagen de referencia" id="imagen">'
                    caja += '<div class="espaciado-cajas">'
                    caja += '<h3 class="titulo" id="titulo">' + blog.titulo + '</h3>';
                    caja += '<hr class="opacity-100 border-danger border-3">'
                    caja += '<p class="mb-4">' + blog.Extracto + '</p>'
                    caja += '</div>'
                caja += '</a>'
            caja += '</div>'
        $('#fila-destacados').append(caja);
                
        })},
    error: function() {
            alert('no hay nada bro xd')
    } 
})
// Carousel Inicio
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
  // Swiper Inicio
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  // Contenido Modals del Inicio y la página Blogs
  let modalInicio = document.getElementById('modalInicio')

$(document).ready(function(){
    modalInicio.addEventListener('show.bs.modal', event => {
        let boton = event.relatedTarget;
        let tituloModal = boton.getAttribute('data-titulo');
        let descripcion1 = boton.getAttribute('data-descripcion-uno')
        let descripcion2 = boton.getAttribute('data-descripcion-dos')
        let img1 = boton.getAttribute('data-img1')
        let img2 = boton.getAttribute('data-img2')
        let img3 = boton.getAttribute('data-img3')
        $('#modalInicioLabel').html(tituloModal)
        $('.descripcion-1').html(descripcion1)
        $('.descripcion-2').html(descripcion2)
        document.querySelector('.imagen-modal1').setAttribute('src', img1)
        document.querySelector('.imagen-modal2').setAttribute('src', img2)
        document.querySelector('.imagen-modal3').setAttribute('src', img3)
        $('.modal-content').css({"background-color": "#252525", "color": "white"})
    })
})
// blogs pero en la página de blogs (osea todos[aunque son pocos])
$.get({
    url: "assets/js/blogs.json",
    dataType: "json",
    success: function(respuesta) {
        $.each(respuesta.masBlogs, function(index, blog) {
            console.log(respuesta.masBlogs[0].id);
            let caja;
            caja = '<div class="col-sm-12 col-md-6 col-lg-4 mx-auto mb-5" data-aos="flip-left" data-aos-duration="800">'
            caja += '<div class="row gap-3">'
                caja += '<a class="cajas hover-cajas" href="#modalInicio" data-bs-toggle="modal" data-bs-target="#modalInicio" data-titulo="' + blog.titulo + '" data-descripcion-uno="' + blog.descripcion1 + '" data-descripcion-dos="' + blog.descripcion2 + '" data-img1="' + blog.imagen1 + '" data-img2="' + blog.imagen2 + '" data-img3="' + blog.imagen3 + '">';
                    caja += '<img class="img-fluid mb-3" src="' + blog.link + '" alt="imagen de referencia" id="imagen">'
                    caja += '<div class="espaciado-cajas">'
                    caja += '<h3 class="titulo" id="titulo">' + blog.titulo + '</h3>';
                    caja += '<hr class="opacity-100 border-danger border-3">'
                    caja += '<p class="mb-4">' + blog.Extracto + '</p>'
                    caja += '</div>'
                caja += '</a>'
            caja += '</div>'
        $('#fila-blogs').append(caja);
                
        })},
    error: function() {
            alert('no hay nada bro xd')
    } 
})
// Creación de comentarios
const nombre = document.querySelector('#nombre');
const comentario = document.getElementById("comentario");
const icono = document.getElementById('icono');
const formulario = document.getElementById("formulario");
const divComentario = document.querySelector('.comentarios-impresos')
const loader = document.querySelector('.spinner-border')
    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        loader.classList.remove('d-none');
        const toastTrigger = document.getElementById('boton-comentario')
        const toastLiveExample = document.getElementById('liveToast')
    setTimeout(function(){
            loader.classList.add('d-none');
            const divCreado = document.createElement('div');
            //intento del icono de perfil
            if (icono.files.length > 0) {
                let imagen = document.createElement('img');
                imagen.classList.add('rounded-circle', 'mb-3');
                imagen.setAttribute('width', '100');
                imagen.setAttribute('height', '100');
                let archivo = icono.files[0]
                let lector = new FileReader();
                lector.onload = function() {
                    imagen.src = lector.result;
                    divCreado.appendChild(imagen);

                    const nombreImpreso = document.createElement('h5')
                    nombreImpreso.innerHTML = '<h5 class="fw-bold w-100">' + nombre.value + '</h5>';
                    divCreado.appendChild(nombreImpreso);

                    const comentarioImpreso = document.createElement('p')
                    comentarioImpreso.innerHTML = '<p class="my-3 text-wrap">' + comentario.value + '</p>';
                    divCreado.appendChild(comentarioImpreso);

                    divComentario.append(divCreado);
                    const linea = document.createElement('hr')
                    linea.classList.add('border', 'border-2', 'border-white', 'opacity-100', 'mb-3')
                    divCreado.append(linea);
                    nombre.value = '';
                    comentario.value = '';
                    icono.value = '';
                };
                lector.readAsDataURL(archivo)
            }

            // El toast aparece despues de 2 segundos
            const toastBootstrap =  bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show();
    }, 2000)
    toastLiveExample.addEventListener('show.bs.toast', function() {
        let texto = toastTrigger.getAttribute('data-texto')
        document.querySelector('.toast-body').innerHTML = texto
        $('.subtitulo-toast').css({"color": "#d45b0a", "font-weight": "700"}) //si le voy a dar estilo mediante js a algo mejor lo hago con jquery jasjas
         /* También quería darle un estilo a los colores del toast, pero como aparecía en la parte inferior derecha
          (no quise cambiarlo porque me gustaba que apareciera en esa posición), pensé que dejarlo blanco era mejor decisión */

    })
});