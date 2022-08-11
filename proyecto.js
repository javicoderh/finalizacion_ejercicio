let lista = document.querySelector(".list");
let tarea = document.getElementById("tarea")
let btnNuevaTarea = document.getElementById("nvaTarea");
let listaDeTareas = document.getElementById("listaTareas");
let contador = document.getElementById("contador");
let botonBorrar = document.getElementById("borrar_ultimo");

//event listeners

btnNuevaTarea.addEventListener("click", agregarTarea);
//botonBorrar.addEventListener("click", borrar);

//funciones 

function agregarTarea(Event) { 
 Event.preventDefault();
 if (contador.textContent > 8) {
  return null
   }
  if(tarea.value === "") {
    return null
   }    
 contador.textContent = parseInt((contador).textContent) +1     
 const nuevaTarea = document.createElement("li");  
 nuevaTarea.innerText = tarea.value;
 nuevaTarea.classList.add("tarea__item");  
 if(tarea.value === "") {
  return null
 }    
 else { return listaDeTareas.appendChild(nuevaTarea) 
 }  
 }
 


