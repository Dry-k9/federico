
if(screen.width <= 600){

window.addEventListener("load", llama, false)
}



function llama(){
  
mmenu = document.getElementById("mmenu");


mmenu.innerHTML ='<div id="botonMenu" onclick="llamarMenu()"> <hr color="#ddd" size="4px"> <hr color="#ddd" size="4px"> <hr color="#ddd" size="4px"> </div>'

mmenu.id ="menuEnMovil"

}





function restaurar(){
  
  mmenu = document.getElementById("menuEnMovil");


mmenu.innerHTML ='<div id="botonMenu" onclick="llamarMenu()"> <hr color="#ddd" size="5px"> <hr color="#ddd" size="5px"> <hr color="#ddd" size="5px"> </div>'
}




function llamarMenu(){
  
menuEnMovil = document.getElementById("menuEnMovil");


menuEnMovil.innerHTML=' <div id="menuEmergente"> <div id="menConten"> <a href = "#Home" onClick="restaurar()"> Inicio </a> <a href = "#Services" onClick="restaurar()"> Servicios </a> <a href = "#AboutMe" onClick="restaurar()"> About me </a> <a href = "#Technologies" onClick="restaurar()"> Tecnologias </a> <a href = "#Projects" onClick="restaurar()"> Proyectos </a> <a href = "#ContactMe" onClick="restaurar()"> Contactame </a> </div> </div>'
}



