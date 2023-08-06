
//query Selector
const heading = document.querySelector('.header__texto h1') //selecciona 0 o 1 elementos
console.log(heading);


//query selector all
const enlaces = document.querySelectorAll('.navegacion a') //selecciona todos
enlaces[0].textContent = 'Nuevo Texto'; 
enlaces[0].classList.add('NuevaClase');
console.log(enlaces);





//GENERAR UN NUEVO ENLACE CON JS
const nuevoEnlace = document.createElement('A');
console.log(nuevoEnlace);

//añadir HREF 
nuevoEnlace.href = 'index.html';

//añadir clase
nuevoEnlace.classList = 'navegacion__enlace'

//añadir texto
nuevoEnlace.textContent = 'Tienda Virtual'

//añadir al HTML
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);





//EVENTOS

// window.addEventListener('load', function(){
//     console.log(' imprimiendo window.addEventListener("load")');
// })//este evento espera a que este todo el html y css e imagenes descargadas
// //estas funciones se llaman callbacks

// window.onload = function(){
//     console.log(' imprimiendo document.onload');
// };

// document.addEventListener('DOMContentLoaded', function(){
//     console.log(' imprimiendo document.addEventListener("DOMContentLoad")');
// })//este evento se espera a que esté cargado SOLO el HTML, por eso es mas rapido que los anteriores


console.log('1');
console.log('2');

console.log('');

// window.onscroll = function(){
//     console.log('haciendo scrol.....');
// }



//seleccionar elementos del html 
//y asociarles un evento 

const botonPrimario = document.querySelector('.boton--primario');
botonPrimario.addEventListener('click', function(evento){
    //console.log(evento);
    // evento.preventDefault(); //es muy util para validar formularios. detine la accion por default como el submit del boton
    // console.log('enviando formulario');
})

console.log('');
console.log('');
console.log('');
console.log('');
console.log('');





//eventos de los inputs y los textareas. Rellenar objeto js desde el formulario html
const datos = {
    nombre: '',
    email: '',
    mensaje:''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

const leerForm = function(e){
    datos[e.target.id] = e.target.value

}

nombre.addEventListener('input', leerForm);
email.addEventListener('input', leerForm);
mensaje.addEventListener('input', leerForm);







//evento del submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //validar fomulario

    if(datos.email === '' || datos.nombre === '' || datos.mensaje === ''){
        mostrarAlerta('todos los campos deben estar rellenos', true);
        return; //aquí salta el código y el resto de código no se ejecuta, ya que la condicion se cumple

    }

    //enviar formulario
    mostrarAlerta('Sus datos han sido enviados.');
    console.log(datos);
})

//creamos funcion para alerta de campos

//  const alertaCamposRellenos = function(mensaje){
    // //   const mensajeError = document.createElement('P');
    // //   mensajeError.textContent = mensaje;
    // //   mensajeError.classList.add('error')
    // //   formulario.appendChild(mensajeError);

    // //  desaparece en 5 segundos
    //  setTimeout(() => {
        //  mensajeError.remove();
    //  }, 3000);

//  }

// const formularioEnviado = function(mensaje){
//     //const enviado = document.createElement('P');
//     // enviado.textContent = mensaje;
//     // enviado.classList.add('formulario__enviado');

//     // formulario.appendChild(enviado);
    
//    //desaparece en 5 segundos
//     setTimeout(() => {
//         enviado.remove();
//     }, 2000);
// }

//REFACTORIZANDO LAS DOS FUNCIONES ANTERIORES.

const mostrarAlerta = function(mensaje, error){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);


}