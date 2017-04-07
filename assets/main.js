var intervalId = null;

//Variables teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
//Variables Snake
var snake = document.getElementById('snake');
var comida = document.getElementById('comida');
var xi=0;
var yi=0;
var i=0;
var tope=400;
var constante = 100;
//Variable botón reiniciar
var boton = document.getElementById('boton');
//Inicia poniendo comida
ponerComida()
//Funciones que darán movimiento a Snake
var moverDerecha= function(){
  if(xi<tope){
    snake.style.marginLeft = ((xi+=100) +"px").toString();
  } else{
    detener()
  }
 }
 var moverIzq = function(){
  if(xi>i){
    snake.style.marginLeft = ((xi-=100) +"px").toString();
  } else{
    detener()
  }
 }
 var moverAbajo = function (){
  if(yi<tope){
    snake.style.marginTop = ((yi+=100) +"px").toString();
  } else{
    detener()
  }
 }
 var moverArriba = function(){
  if(yi>i){
    snake.style.marginTop = ((yi-=100) +"px").toString();
  } else{
    detener()
  }
 }
 //Función perdiste
function perdiste(){
  alert("perdiste");
}
//Función que accede a las teclas y les asigna comportamiento.
function teclaPulsada(evento){
  console.log('evento')
    switch(evento.keyCode){
    case teclas.UP:
    clearInterval(intervalId);
      intervalId = setInterval(moverArriba, 800)
    break;
    case teclas.DOWN:
    clearInterval(intervalId);
      intervalId = setInterval(moverAbajo, 800)
    break;
    case teclas.LEFT:
    clearInterval(intervalId);
      intervalId = setInterval(moverIzq, 800)
    break;
    case teclas.RIGHT:
    clearInterval(intervalId);
      intervalId = setInterval(moverDerecha, 800)
    break;
  
  }
}
//Función para reiniciar juego
function reiniciar(){
  snake.style.marginLeft = (i +"px").toString();
  snake.style.marginTop = (i + "px").toString();
  document.addEventListener("keydown", teclaPulsada)
  ponerComida()
}

function detener(){
  document.removeEventListener("keydown", teclaPulsada);
    perdiste()
}

//Funcion comida al azar
function ponerComida(){
  var x=Math.round((Math.random()*(400))/100)*100;
  var y=Math.round((Math.random()*(400))/100)*100;
  comida.style.marginLeft=x+"px";
  comida.style.marginTop=y+"px";
}

//EVENTOS
document.addEventListener("keydown", teclaPulsada);

boton.addEventListener("click", reiniciar)
