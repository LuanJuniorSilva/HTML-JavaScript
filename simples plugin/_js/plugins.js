$(document).ready(function(){
	function plugar(){
	$("body").prepend("<div id=\"plugin\"></div>");
	$("#plugin").prepend("<div id=\"menos\"><span class=\"menos\">-</span></div><input type=\"text\" value=\"1\" min=\"1\" class=\"number_format\" readonly=\"readonly\" />1<div id=\"mais\"><span class=\"mais\">+</span></div>");
	$("#menos,#mais").css({
		display:"inline-block",
		border:"1px solid black",
		width:"20px",
		height:"20px",
		cursor:"pointer"
	});
	$("#menos").css({
		content:"-",
		fontSize:"20px",
		marginLeft:"8px",
		top:"15px",
		position:"relative"
	});
	$("#mais").css({
		content:"+",
		fontSize:"20px",
		marginLeft:"20px",
		top:"15px",
		position:"relative"
	});
	$(".menos").css({
		position:"relative",
		fontSize:"30px",
		top:"-10px",
		marginLeft:"4px"
	});
	$(".mais").css({
		position:"relative",
		fontSize:"30px",
		top:"-8px",
		marginLeft:"2px"
	});
	$(".number_format").css({
		position:"relative",
		left:"17px",
		top:"4px",
		fontSize:"18px",
		width:"19px",
		border:"none",
		zIndex:"5"
	});
	$("#menos").click(function(){
		var m = $(".number_format").val();
		m--;
		if(m < 1){
			return false
		}
		$(".number_format").val(m);
	});
	$("#mais").click(function(){
		var m = +$(".number_format").val();
		m++;
		$(".number_format").val(m);	
	});
	}
	plugar();
});