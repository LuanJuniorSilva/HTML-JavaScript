window.onload = function (){
	setInterval(slideshow,1000);
}
b=0;
function slideshow(){
	
	switch (b)
	{
	case 0:photos.src="_imgs/1.jpg";
		break;
	case 1:photos.src="_imgs/2.jpg";
		break;
	case 2:photos.src="_imgs/3.jpg";
		break;
	case 3:photos.src="_imgs/4.jpg";
		break;
	case 4:photos.src="_imgs/5.jpg";
	b=-1;
	}
	b++;
}

	