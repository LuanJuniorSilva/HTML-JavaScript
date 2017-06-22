window.onload = function (){
	setTimeout(troc01,500);
	setTimeout(troc001,1000);
}
	function troc01(){
		var tub = document.getElementById("tub");
		tub.src = "_imgs/shark1-a.png";
		tub.style.transition = "all 4s ease-out ";
		tub.style.transform = "translate(320px,0px) ";
		
		setTimeout(troc02,100);
		
	}
	
	function troc02(){
		var tub02 = document.getElementById("tub");
		tub02.src = "_imgs/shark1-b.png";
		setTimeout(troc01,100);
	}
	
	
	// function animate
	
	
	function troc001(){
		var peixe01 =  document.getElementById("fish01");
		peixe01.style.transition = "all 1s ease-out";
	 peixe01.style.transform="translate(0px,350px)";
	 peixe01.style.opacity= "0";
	 peixe01.innerHTML = "<div class='fish001' id='fish001'></div>";
		
		var peixe001 =  document.getElementById("fish001");
		peixe001.style.transition = "all 40s ease-out";
		peixe001.style.transform = "translate(200px,-0px)";
		peixe001.style.opacity = "0";
			
		var peixe02 = document.getElementById("fish02");
		peixe02.style.transition = "all 1.5s ease-out";
		peixe02.style.transform="translate(0px,350px)";
		peixe02.style.opacity = "0";
	 
	 peixe02.innerHTML = "<div class='fish001' id='fish002'></div>";
		var peixe002 =  document.getElementById("fish002");
		peixe002.style.transition = ":all 2s ease-out";
		peixe002.style.transform = "translate(0px,0px)";
		peixe002.style.opacity = "0";
	 
		var peixe03 = document.getElementById("fish03");
		peixe03.style.transition = "all 2s ease-out";
		peixe03.style.transform ="translate(0px,350px)";
		peixe03.style.opacity = "0";
	 
		var peixe04 = document.getElementById("fish04");
		 peixe04.style.transition = "all 2.5s ease-out";
		 peixe04.style.transform = "translate(0px,350px)";
		 peixe04.style.opacity = "0";
	 
	 var peixe05 = document.getElementById("fish05");
	 peixe05.style.transition = "all 3s ease-out";
	 peixe05.style.transform = "translate(0px,350px)";
	 peixe05.style.opacity = "0";
	 
	 var peixe06 = document.getElementById("fish06");
	 peixe06.style.transition = "all 3.5s ease-out";
	 peixe06.style.transform = "translate(0px,350px)";
	 peixe06.style.opacity = "0";
	 
	 var peixe07 = document.getElementById("fish07");
	 peixe07.style.transition = "all 4s ease-out";
	 peixe07.style.transform = "translate(0px,350px)";
	 peixe07.style.opacity = "0";
	 
	 var peixe08 = document.getElementById("fish08");
	 peixe08.style.transition = "all 4.5s ease-out";
	 peixe08.style.transform = "translate(0px,350px)";
	 peixe08.style.opacity = "0";
	 setTimeout(troc002,500);
	 	
	}
	
	