let input1 = document.addEventListener('input', valorUpdate);

function valorUpdate(e){
    let escrito = e.target.value;
    if(escrito === 'Guille'){
    document.getElementById("parrafo").innerHTML = "Has escrito tu nombre";
    }else{
    document.getElementById("parrafo").innerHTML = "Ese no es tu nombre";
    }
}