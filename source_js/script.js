
$(document).ready(function(){

	// nav bar
	$("#levme").click(function(){
		$('html,body').animate({
			scrollTop: $("#slider-div").offset().top-64},'slow'
		);
	});

	$("#resume").click(function(){
		$('html,body').animate({
			scrollTop: $("#resume-div").offset().top-64},'slow'
		);
	});

	$("#activities").click(function(){
		$('html,body').animate({
			scrollTop: $("#activities-div").offset().top-64},'slow'
		);
	});

	$("#contact").click(function(){
		$('html,body').animate({
			scrollTop: $("#contact-div").offset().top-64},'slow'
		);
	});	

	$("#levme").css({"border-radius":"7px", "border":"2px solid #aaaaaa"});

	var atTop = !$(document).scrollTop();

	$(window).scroll(function(){

		var height = $(document).scrollTop();
		//show position
		if( height <100){
			//console.log(height);
		   	$("#levme").css({"border-radius":"5px", "border":"2px solid #aaaaaa"});
			$("#resume").css({"border-radius":"5px", "border":"none"});
			$("#activities").css({"border-radius":"5px", "border":"none"});
			$("#contact").css({"border-radius":"5px", "border":"none"});
		}else if( height <$("#resume-div").offset().top-44){
		   	$("#levme").css({"border-radius":"5px", "border":"none"});
			$("#resume").css({"border-radius":"5px", "border":"2px solid #aaaaaa"});
			$("#activities").css({"border-radius":"5px", "border":"none"});
			$("#contact").css({"border-radius":"5px", "border":"none"});
		}else if( height <$("#activities-div").offset().top-44){
		   	$("#levme").css({"border-radius":"5px", "border":"none"});
			$("#resume").css({"border-radius":"5px", "border":"none"});
			$("#activities").css({"border-radius":"5px", "border":"2px solid #aaaaaa"});
			$("#contact").css({"border-radius":"5px", "border":"none"});
		}else if( height <$("#contact-div").offset().top-44){
		   	$("#levme").css({"border-radius":"5px", "border":"none"});
			$("#resume").css({"border-radius":"5px", "border":"none"});
			$("#activities").css({"border-radius":"5px", "border":"none"});
			$("#contact").css({"border-radius":"5px", "border":"2px solid #aaaaaa"});
		}



		//scroll to 
		if( height > 100 && !atTop){
			$('nav').animate({height: "44px"},'fast');
			$('nav ul').animate({'font-size': "15px"},'fast');
			//$('nav li a').animate({margin: "2px"},'fast');
			$('nav li a').animate({padding: "6px"},'fast');
			atTop = true;
		}else if(height <= 100 && atTop){
			$('nav').animate({height: "59px"},'fast');
			$('nav ul').animate({'font-size': "20px"},'fast');
			//$('nav li a').animate({margin: "6px 0px"},'fast');
			$('nav li a').animate({padding: "10px"},'fast');
			atTop = false;
		}
	});


	// slider
	var moveToNext = function(){
	$('#carousel ul').animate({marginLeft:'-1800px'},3000,function(){

		$(this).find('li:last').after($(this).find('li:first'));
		$(this).css({marginLeft:'-900px'});

		});
	};

	var timer = window.setInterval(moveToNext, 7000);

	$('#right').click(function(){
		if($('#carousel ul').css("marginLeft") == "-900px"){
			$('#carousel ul').animate({marginLeft:'-1800px'},3000,function(){

				$(this).find('li:last').after($(this).find('li:first'));
				$(this).css({marginLeft:'-900px'});

				window.clearInterval(timer);
				timer = window.setInterval(moveToNext, 7000);
			});
		}
	});


	$('#left').click(function(){
		if($('#carousel ul').css("marginLeft") == "-900px"){ 
			$('#carousel ul').animate({marginLeft:'0px'},3000,function(){
				$('#carousel ul li:first').before($('#carousel ul li:last')); 
				$(this).css({marginLeft:'-900px'});
				window.clearInterval(timer);
				timer = window.setInterval(moveToNext, 7000);
			});
		}
	});


	//modal

	$('a[name=modal]').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');
    
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(document).innerWidth();
    
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
        //transition effect        
        $('#mask').fadeIn(1000);    
        $('#mask').fadeTo("slow",0.8);    
    
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
              
        //transition effect
        $(id).fadeIn(2000); 
    
    });
    
    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
    });        
    
    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    }); 
});


