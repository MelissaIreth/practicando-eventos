function evento(){
	var boton = document.getElementById('demo');
	boton.addEventListener("click", function(){
		alert("Hola mundo!");
	})

};

function load(){
	var cuerpo = document.querySelector("body");
	cuerpo.addEventListener("load", function(){
		     alert("La página esta cargada");
	})
};


function input(){
	var encima = document.getElementById('input');
	encima.addEventListener("mouseout", function(){
		alert("Estás sobre mí");
	})

	var fuera = document.getElementById('input');
	fuera.addEventListener("mouseover", function(){
		alert("No estás sobre mí");
	})

};
load();
input();

