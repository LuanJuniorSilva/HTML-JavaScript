window.onload = function(){
	setTimeout(troc01,1000);
}
	function troc01(){
		document.getElementById("cao").src = "_imgs/dog2-b.png";
		cao.style.transition = "all 19s ease-in-out";
		cao.style.transform = "translate(300px,0px)";
		setTimeout(troc02,300);
	}
	function troc02(){
		document.getElementById("cao").src = "_imgs/dog2-c.png";
		setTimeout(troc01,300);
	}