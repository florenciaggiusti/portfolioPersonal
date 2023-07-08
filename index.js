const modoNocheToggle = document.getElementById('botonModoNoche');
 const bodyElement = document.body;
 const navElement = document.querySelectorAll('.navbar .nav-link');
 const luna = document.querySelector('.navbar .bi');
 const foto = document.querySelector('.hero-imagen-desarrollador');
 const descripcion = document.querySelector('.sobre-mi .seccion-titulo');
 const texto = document.querySelector('.sobre-mi .seccion-texto');

 const desactivarEventos = (event) => {
  event.preventDefault();
}

modoNocheToggle.addEventListener('click', function(event) {
  desactivarEventos(event);
});

const activarModoNochem = () => {
    bodyElement.classList.add('modo-noche');
     for (let i = 0; i < navElement.length; i++) {
		navElement[i].classList.add('mode');
  }
  luna.classList.add('lunaNoche');
  foto.classList.add('imagen-modoNoche');
  descripcion.classList.add('texto-oscuro');
   texto.classList.add('texto-oscuro');
}

const desactivarModoNoche = () => {
    bodyElement.classList.remove('modo-noche');
     for (let i = 0; i < navElement.length; i++) {
		navElement[i].classList.remove('mode');
  }
  luna.classList.remove('lunaNoche');
  foto.classList.remove('imagen-modoNoche');
  descripcion.classList.remove('texto-oscuro');
  texto.classList.remove('texto-oscuro');
}

const alternarModoNoche = () => {
    bodyElement.classList.toggle('modo-noche');
     for (let i = 0; i < navElement.length; i++) {
    	navElement[i].classList.toggle('mode');
  }
    luna.classList.toggle('lunaNoche');
   foto.classList.toggle('imagen-modoNoche');
  descripcion.classList.toggle('texto-oscuro');
  texto.classList.toggle('texto-oscuro');
}

modoNocheToggle.addEventListener('click',alternarModoNoche);
