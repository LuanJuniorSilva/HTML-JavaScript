/*function somar(x,y){
	alert(x+y);
}
somar(5,5);


function somar(x,y){
	return x+y;
}

alert(somar(5,5));
*/

/*

try {//tente executar este codigo
	var x = a;
	var b = x = 10;
	alert(b);
} catch(e){ // pegue este proplema e diga que erro
	alert(e.message);// mensagem do erro tipo do erro
	alert(e.name);   // mensagem do erro nome do erro
	alert(e.name + " - " + e.message); // nome concatenado com o tipo do erro
	alert(e.toString());// mensagem do erro mais o outro erro
} finally{
	o finally é executado com ou sem erro! não é obrigatorio
} */

/*
var x = prompt("Informe numero maior que 10");
try {
	
	if(x < 10){
		throw "numero menor que 10";
	}
	
	
} catch(e){
	
	alert(e);
} */

/*
var Carro = {
	marca: "Nissan",
	modelo: "350Z",
	potencia: {
		cavalos: "350",
		velocidade: "320km/h"
	}
};
with(Carro.potencia){
	alert(cavalos);
	alert(velocidade);
}
*/

// faça um programa que leia a idade de 5 pessoas calcula e exiba
//a mais velha
//a idade media
//o numero de pessoas com idade superior a 20 anos
var idade = 0;
var n20 = 0;
var soma = 0;
var maisvelha = -10000;


for (var i=1;i<=5;i++){
	var idade = prompt("qual a  idade: ");
	soma = soma + parseInt(idade);
	
	// verifica a mais velha
	if(maisvelha< parseInt(idade))
		maisvelha = idade;
	//incrementa quant maior que vinte
	
	if(idade > 20)
		n20++;
}
document.write("Idade mais velha: " + maisvelha + "<br />" + "idade média = " + (soma/5) + "<br />Maior que 20: " + n20);