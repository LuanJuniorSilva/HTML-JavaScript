var quebrada = false;
function mudaLampada(tipo){
	
	if(!quebrada){
	document.getElementById("luz").src = "_img/" + tipo + ".jpg";
	if(tipo == 'lampada-quebrada'){
		quebrada = true;
	}
  }
}