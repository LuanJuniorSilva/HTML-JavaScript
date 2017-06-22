$(document).ready(function(){
	//efeito de entrada do menu
	$('#menu').animate({
		marginLeft:'-500px'
	},1000);
	//passar o mouse em cima do menu
	$('#menu').hover(function(){
		$(this).stop().animate({
			marginLeft:0
		},500);
	}, function(){
		$(this).stop().animate({
			marginLeft:'-500px'
		},500);
	});
	//anima controle
	var altura = $(window).height();
	var largura = $(window).width();
	largura = largura - 950;
	largura = largura / 2;
	$('#contato, #home, #portfolio').css({
		marginLeft:largura,
		marginRight:largura
	})
	$('#controls-wrapper').animate({
		marginTop:altura-62
	},2000,'easeOutBounce');
	//click do mouse no menu
	$('#menu li a').click(function(){
		var id = $(this).attr('href');
		$('html, body').animate({
			scrollLeft:$(id).offset().left-largura
		});
		return false;
	});
	//mouseenter passar do mouse
	$('#menu li').bind('mouseenter',function(){
		$(this).find('img').stop().animate({
			width:'175px',
			height:'175px',
			left:0
		},500,'easeOutBack').andSelf().find('.texto').stop().animate({
			height:'110px'
		},500,'easeOutBack').andSelf().find('.anime').stop().animate({
			marginTop:'100px'
		},500,'easeOutBack');
	});
	//mouseleave o tirar o mouser
	$('#menu li').bind('mouseleave',function(){
		$(this).find('img').stop().animate({
			width:0,
			height:0,
			left:'77px'
		},500,'easeOutBack').andSelf().find('.texto').stop().animate({
			height:0
		},500,'easeOutBack').andSelf().find('.anime').stop().animate({
			marginTop:0
		},500,'easeOutBack');
	});
});

/******************** Background ****************************/
jQuery(function($){
	$.supersized({
				
	//Functionality
	slideshow               :   1,		//Slideshow on/off
	autoplay				:	1,		//Slideshow starts playing automatically
	start_slide             :   1,		//Start slide (0 is random)
	random					: 	0,		//Randomize slide order (Ignores start slide)
	slide_interval          :   5000,	//Length between transitions
	transition              :   1, 		//0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	1000,	//Speed of transition
	new_window				:	1,		//Image links open in new window/tab
	pause_hover             :   0,		//Pause slideshow on hover
	keyboard_nav            :   1,		//Keyboard navigation on/off
	performance				:	1,		//0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
	image_protect			:	1,		//Disables image dragging and right click with Javascript
	image_path				:	'img/', //Default image path

					//Size & Position
	min_width		        :   0,		//Min width allowed (in pixels)
	min_height		        :   0,		//Min height allowed (in pixels)
	vertical_center         :   1,		//Vertically center background
	horizontal_center       :   1,		//Horizontally center background
	fit_portrait         	:   1,		//Portrait images will not exceed browser height
	fit_landscape			:   0,		//Landscape images will not exceed browser width
					
					//Components
	navigation              :   1,		//Slideshow controls on/off
	thumbnail_navigation    :   0,		//Thumbnail navigation
	slide_counter           :   1,		//Display slide numbers
	slide_captions          :   1,		//Slide caption (Pull from "title" in slides array)
	slides 					:  	[		//Slideshow Images
	{image : 'galeria/1.jpg', title : '', url : ''},  
	{image : 'galeria/2.jpg', title : '', url : ''},  
	{image : 'galeria/3.jpg', title : '', url : ''},
	{image : 'galeria/4.jpg', title : '', url : ''}
	]					
	}); 
});



