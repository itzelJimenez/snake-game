var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var snake = document.getElementById('snake');
var xi=0;
var yi=0;
var xf=400;
var yf=400;
var constante = 100;

function moverDerecha(){
	if(xi<xf){
		snake.style.marginLeft = ((xi+=constante) +"px").toString();
	} else{
		snake.style.marginLeft = "400px"
		perdiste()
	}
}
function moverIzq(){
	if(xf>xi){
		snake.style.marginLeft = ((xi-=constante) +"px").toString();
	} else{
		perdiste()
	}
}
function moverAbajo(){
	if(yi<yf){
		snake.style.marginTop = ((yi+=constante) +"px").toString();
	} else{
		perdiste()
	}
}
function moverArriba(){
	if(yf>yi){
		snake.style.marginTop = ((yi-=constante) +"px").toString();
	} else{
		perdiste()
	}
}
function perdiste(){
	alert("perdiste")
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
  }
		
}
document.addEventListener("keydown", teclaPulsada)


//EVENTOS

