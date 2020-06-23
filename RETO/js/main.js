  

function addElements(){
    let escrito = document.getElementById("input1");
    let objetoDiv = document.getElementById("contenedor");
    let p = document.createElement("p");
    p.innerHTML = escrito.value;
    escrito.value = "";
    objetoDiv.appendChild(p);
    }

function deleteElements(){
    let objetoDiv = document.getElementById("contenedor").lastElementChild;
    objetoDiv.remove();
    }
        
function deleteAllElements(){
    let objetoDiv = document.getElementById("contenedor");
    while (objetoDiv.firstChild) {
        objetoDiv.removeChild(objetoDiv.firstChild);
     }
}