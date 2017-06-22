window.onload = function(){
	document.getElementById("botao").onclick = function(){
		//status=200, statusText=OK, responseText, responseXML
		var ajax = new XMLHttpRequest();
		var r = document.getElementById("resposta");
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){
				//alert("requisição chegou!");
				//alert(ajax.responseText);
				//r.appendChild(document.createTextNode(ajax.responseText));
				//r.innerHTML = ajax.responseText;
				
				var xml = ajax.responseXML;
				var url = xml.getElementsByTagName("url")[0].firstChild.nodeValue;
				r.appendChild(document.createTextNode(url));
				
				
				//E4X
				//var xml = new XML(ajax.responseText);
				//r.appendChild(document.createTextNode(xml.url));
			}
		}
		//ajax.open("POST","ajax/arquivo.txt");
		//ajax.open("POST","ajax/arquivo.txt",true);
		//ajax.open("POST","ajax/arquivo.txt",false);
		//ajax.open("POST","ajax/arquivo.txt");
		//ajax.open("POST","ajax/arquivo.html");
		ajax.open("POST","ajax/arquivo.xml");
		ajax.send(null);
		return false;
	}
}