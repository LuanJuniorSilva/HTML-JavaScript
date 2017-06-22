/*
window.onload = function (){
	var video = document.getElementById("videoex");
	video.onmousemove = function(){
		video.play();
	}
	video.onmouseout = function(){
		video.pause();
	}
}
*/
$(document).ready(function(){
	$("#videoex").hover(
		function(){this.play();},
		function(){this.pause();}
	);
});