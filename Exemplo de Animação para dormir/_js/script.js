/* Calculo da Média de um Aluno */
window.onload = function (){
	
	
	var dormir = document.getElementById("dormir");
	dormir.onclick = function (){
		var olho01 = document.getElementById("olho1");
		olho01.style.transition = "all 1s ease-out";
		olho01.style.height = "50px";
		olho01.style.width = "90px";
		olho01.style.top = "135px";
		olho01.style.position = "absolute";
		olho01.style.borderLeft = "0px solid white";
		olho01.style.borderRight = "0px solid white";
		olho01.style.borderBottom = "0px solid white";
		olho01.style.borderTop = "5px solid black";
		olho01.style.borderRadius = "200px";
		
		
		var olho0a =  document.getElementById("olho1a");
		olho0a.style.transition = "all 1s ease-out";
		olho0a.style.opacity = "0";
		
		var olho0a =  document.getElementById("olho1b");
		olho0a.style.transition = "all 1s ease-out";
		olho0a.style.opacity = "0";
		
		var olho01 = document.getElementById("olho2");
		olho01.style.transition = "all 1s ease-out";
		olho01.style.height = "50px";
		olho01.style.width = "90px";
		olho01.style.top = "135px";
		olho01.style.position = "absolute";
		olho01.style.borderLeft = "0px solid white";
		olho01.style.borderRight = "0px solid white";
		olho01.style.borderBottom = "0px solid white";
		olho01.style.borderTop = "5px solid black";
		olho01.style.borderRadius = "200px";
		
		var olho0a =  document.getElementById("olho2a");
		olho0a.style.transition = "all 1s ease-out";
		olho0a.style.opacity = "0";
		
		var olho0a =  document.getElementById("olho2b");
		olho0a.style.transition = "all 1s ease-out";
		olho0a.style.opacity = "0";
		
		var teste = document.getElementById("testando");
		teste.style.background = "black";
		
		document.getElementById("lamp01").src =
		"_img/lampada-ligadona.jpg";
	
}

setTimeout(troc01,1000);

}


/* ---------------------------------------------------------------- */





function troc01(){
	var trocColor01 =  document.getElementById("dormir");
	trocColor01.style.transition = "all 1s ease-out";
	trocColor01.style.color = "darkgreen";
	setTimeout(troc02,1000);
}
function troc02(){
	var trocColor01 =  document.getElementById("dormir");
	trocColor01.style.transition = "all 1s ease-out";
	trocColor01.style.color = "green";	
	setTimeout(troc03,1000);
}
function troc03(){
	var trocColor01 =  document.getElementById("dormir");
	trocColor01.style.transition = "all 1s ease-out";
	trocColor01.style.color = "blue";	
	setTimeout(troc04,1000);
}
function troc04(){
	var trocColor01 =  document.getElementById("dormir");
	trocColor01.style.transition = "all 1s ease-out";
	trocColor01.style.color = "red";
	setTimeout(troc01,1000);
} 
