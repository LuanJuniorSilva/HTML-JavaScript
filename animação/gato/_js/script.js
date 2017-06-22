window.onload = function(){
	setTimeout(troc01,100);
}
	function troc01(){
		document.getElementById("gato").src = "_imgs/cat1-b.gif";
		gato.style.transition = "all 9s ease-out";
		gato.style.transform = "translate(360px,0px)";
		setTimeout(troc02,100);
	}
	function troc02(){
		document.getElementById("gato").src = "_imgs/cat1-a.gif";
		
		setTimeout(troc01,100);
	}