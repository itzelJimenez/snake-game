
var snake = document.getElementById('snake');
var seccion = document.getElementById('seccion');
var x=0;
var y=0;
var i=0;


function moverDerecha(){
	snake.style.marginLeft = "100px"	
}
function moverAbajo(){
	snake.style.marginTop = "100px"
}


//EVENTOS
document.addEventListener("click", moverDerecha)
document.addEventListener("keypress", moverAbajo)