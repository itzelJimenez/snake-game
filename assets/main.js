
var snake = document.getElementById('snake');
var seccion = document.getElementById('seccion');
var xi=0;
var yi=0;
var xf=400;
var yf=400;

function moverDerecha(){
	if(xi<xf){
		snake.style.marginLeft = ((xi+=100) +"px").toString();
	} else{
		snake.style.marginLeft = "400px"
		alert("perdiste")
	}
}
function moverIzq(){
	if(xf>xi){
		snake.style.marginLeft = ((xi-=100) +"px").toString();
	} else{
		snake.style.marginLeft = "0px"
		alert("perdiste")
	}
}
function moverAbajo(){
	if(yi<yf){
		snake.style.marginTop = ((yi+=100) +"px").toString();
	} else{
		snake.style.marginTop = "400px"
		alert("perdiste")
	}
}
function moverArriba(){
	if(yf>yi){
		snake.style.marginTop = ((yi-=100) +"px").toString();
	} else{
		snake.style.marginTop = "0px"
		alert("perdiste")
	}
}

//EVENTOS
document.addEventListener("click", moverAbajo)
document.addEventListener("keypress", moverArriba)