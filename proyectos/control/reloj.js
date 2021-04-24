
     
   var relojContenedor = document.getElementById("contenedor");
   
   
   
   setInterval(inyectarHora, 10)




function cambio(val){
  

document.getElementsByClassName("pest")[0].id ="none";

document.getElementsByClassName("pest")[1].id ="none";

document.getElementsByClassName("pest")[2].id ="none";


document.getElementsByClassName("pest")[val-1].id ="active";

}




function salir(){
     alert("s")
window.close();
alert("ns")
}




function inyectarHora(){

var fecha = new Date();

var diaMes = fecha.getDate(); //dia del mes

var mesN = fecha.getMonth(); //mes

var year = fecha.getFullYear(); //año

var diaSemanaN = fecha.getDay(); //dia semana

var horaN = fecha.getHours(); //hora 

var minutos = fecha.getMinutes(); //min

var segundos = fecha.getSeconds(); //seg


var mes;

switch(mesN){
  
  case 0: mes = "Ener";
  break
  case 1: mes="Febr";
  break
  case 2: mes="Marz";
  break
  case 3: mes="Abril";
  break
  case 4: mes="Mayo";
  break
  case 5: mes="Junio";
  break
  case 6: mes="Julio";
  break
  case 7: mes="Agos";
  break
  case 8: mes="Sept";
  break
  case 9: mes="Octu";
  break
  case 10: mes="Novi";
  break
  case 11: mes="Dici";
  break
}



var diaSemana;

switch(diaSemanaN){
  
  case 0: diaSemana = "Dom";
  break
  case 1: diaSemana="Lun";
  break
  case 2: diaSemana="Mart";
  break
  case 3: diaSemana="Mier";
  break
  case 4: diaSemana="Juev";
  break
  case 5: diaSemana="Vier";
  break
  case 6: diaSemana="Sab";
  break
}


var meridiano;


if(horaN == 12){
  
  var hora = 12;
  meridiano = "pm";
  
}else if(horaN == 0){
  
  var hora = horaN + 12;
  meridiano = "am";
  
}else if(horaN >= 13){
  
  var hora = horaN - 12;
  meridiano = "pm";
  
}else{
  
  var hora = horaN;
  meridiano = "am";
}


var horaMinSeg = hora+":"+minutos+":"+segundos + " " + meridiano;


var fechaTotal = diaSemana+" "+diaMes+" "+mes+" "+year;



document.getElementById("reloj").innerHTML = horaMinSeg + '<h1>' + fechaTotal + '</h1>';

}





var stop = 0;
var activeCrono;


function iniciarCrono(){
  
  stop = stop +1;
  
  if (stop == 1){
    
    activeCrono = setInterval(contar, 1000);
    
  }else if(stop>=2){
    
    stop = 0;
    clearInterval(activeCrono);
  }
  
  
  
var segun =1;
var minut =0;
var hor =0;
  
  
  function contar(){
   
   
    var cronom = document.getElementById("cronometro");
   
    cronom.innerHTML = hor + ':' + minut + ':' + segun;
    
    
    segun = segun +1;
    
    
      if(segun >= 60){
      
       segun = 0;
       minut = minut +1
      }
      
      if(minut >= 60){
      
       minut = 0;
       hor = hor +1
      }
  }
  
}