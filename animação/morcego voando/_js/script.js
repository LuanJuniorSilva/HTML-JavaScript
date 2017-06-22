window.onload = function (){
	setTimeout(troc01,300);
	setTimeout(troc001,200);
}
// Aqui vai o primeiro morcego
function troc01(){
		document.getElementById("bat01").src = 
			"_imgs/bat1-b.png";
		bat01.style.transition = "all 5s ease-out";
		bat01.style.transform = "translate(345px,-10px)";
	
		setTimeout(troc02,300);
}
function troc02(){
	document.getElementById("bat01").src = 
		"_imgs/bat1-a.png";
	bat01.style.transition = "all 5s ease-out";
	bat01.style.transform = "translate(323px,70px)";
	setTimeout(troc01,300);
}

// Aqui vai o segundo morcego
	function troc001(){
		document.getElementById("bat02").src = 
			"_imgs/bat2-b.png";
		bat02.style.transition = "all 5s ease-out";
		bat02.style.transform = "translate(-300px,170px)";
		setTimeout(troc002,200);
}
		function troc002(){
		document.getElementById("bat02").src = 
			"_imgs/bat2-a.png";
		bat02.style.transition = "all 5s ease-out";
		bat02.style.transform = "translate(-330px,-70px)";
		setTimeout(troc001,200);
}
