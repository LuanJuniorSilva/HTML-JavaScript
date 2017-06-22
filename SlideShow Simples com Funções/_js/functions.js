/*funcao trocar foto*/
window.onload = function(){
	setTimeout(tr01, 2000);
	setTimeout(tr001, 2000);
}
function tr01(){
	document.getElementById("img"). src = "_img/images.jpg";
	setTimeout(tr02, 2000);
}
function tr02(){
	document.getElementById("img"). src = "_img/asa21.jpg";
	setTimeout(tr03, 2000);
}
function tr03(){
	document.getElementById("img"). src = "_img/Koala.jpg";
	setTimeout(tr01, 2000);
}

/*funcao trocar imagem de fundo*/
function tr001(){
	document.getElementById("grounds").style = 
	"background-image:url(_img/images.jpg)";
	setTimeout(tr002, 2000);
}
function tr002(){
	document.getElementById("grounds").style = 
	"background-image:url(_img/asa21.jpg)";
	setTimeout(tr003, 2000);
}
function tr003(){
	document.getElementById("grounds").style = 
	"background-image:url(_img/Koala.jpg)";
	setTimeout(tr001, 2000);
}