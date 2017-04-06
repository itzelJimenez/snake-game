var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var snake = document.getElementById('snake');
var xi=0;
var yi=0;
var i=0;
var tope=400;
var constante = 100;

//EVENTOS
document.addEventListener("keydown", teclaPulsada);

function moverDerecha(){
 	if(xi<tope){
 		snake.style.marginLeft = ((xi+=100) +"px").toString();
 	} else{
 		perdiste()
 	}
 }
 function moverIzq(){
 	if(xi>i){
 		snake.style.marginLeft = ((xi-=100) +"px").toString();
 	} else{
 		perdiste()
 	}
 }
 function moverAbajo(){
 	if(yi<tope){
 		snake.style.marginTop = ((yi+=100) +"px").toString();
 	} else{
 		perdiste()
 	}
 }
 function moverArriba(){
 	if(yi>i){
 		snake.style.marginTop = ((yi-=100) +"px").toString();
 	} else{
 		perdiste()
 	}
 }
function perdiste(){
	alert("perdiste");
	document.removeEventListener("keydown", teclaPulsada);
}
function teclaPulsada(evento){
	console.log('evento')
		switch(evento.keyCode){
    case teclas.UP:
    	moverArriba()
    break;
    case teclas.DOWN:
    	moverAbajo()
    break;
    case teclas.LEFT:
    	moverIzq()
    break;
    case teclas.RIGHT:
    	moverDerecha()
    break;
    default:
    	alert('Presiona las teclas correctas');
    break;
  }
		
}






