window.onload = function(){
	textSlide();
}
function textSlide(isLoop) {
if (isLoop != '1') {
repeat=1;
text=document.getElementById("letreiro").innerHTML;
leng=text.length;
start=0;
}
txt=text.substring(start, leng) + text.substring(0, start);
document.getElementById("letreiro").innerHTML=txt;
start++;
if (start==leng+1) {
start=0;
if (repeat==2)
return;
}
setTimeout("textSlide('1')",100);
}
