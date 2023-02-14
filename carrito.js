const carrito = document.getElementById('carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let arregloCarrito = [];

// Apartado de metodos
cargarEventos();

function cargarEventos(){
    //CRUD
    //en la seccion de los cursos realizara lo que esta en el metodo agregar curso
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(event){
    //Evitando que el hipervinculo no redireccione
    event.preventDefault();

    //validar si la clase existe, mande los elementos
    if (event.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = event.target.parentElement;
        console.log(cursoSeleccionado);
    }
}