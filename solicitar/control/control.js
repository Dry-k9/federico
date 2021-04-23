
var cartel = document.getElementById("cartel");



saludo ="gracias por solicitar nuestros servicios";





f =0;

function saluda(){

if (f >= saludo.length -1){
  
  clearInterval(parar);
}

cartel.insertAdjacentHTML("beforeend", saludo[f]);
f = f +1
}


var parar = setInterval(saluda, 80);
