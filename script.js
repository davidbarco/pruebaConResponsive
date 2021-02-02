"use strict";

/* recoger datos de formulario */
const formulario= document.getElementById("form");
const nombre = document.getElementById("nombre").value;
const apellidos = document.getElementById("apellidos").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

/* al hacer submit llamo este evento. */
formulario.addEventListener("submit", e=>{
    e.preventDefault();
    const nombreUser= document.getElementById("nombreUser").innerHTML ="Bienvenido: " + nombre +" " + apellidos
})


/* popUp */
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

/* open.addEventListener('click', () => {
  modal_container.classList.add('show');  
}); */

close.addEventListener('click', () => {
  modal_container.classList.add('cerrar');
});





