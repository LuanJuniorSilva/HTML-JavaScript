var quebrada = false;
function mudaLampada(tipo){
	if(tipo == 1){
			arquivo = "_img/lampada-acesa.jpg";
	}
	if(tipo == 2){
			arquivo = "_img/lampada-apagada.jpg";
	}
	if(tipo == 3){
			arquivo = "_img/lampada-quebrada.jpg";
	}
	if(!quebrada){
	document.getElementById("luz").src = arquivo;
	if(tipo == 3){
		quebrada = true;
	}
  }
}