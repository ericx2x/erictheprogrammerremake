
$(function(){
/*-----------------------
	Debug
	-------------------*/
	
	/*var debug = function(to){
		if($('#debug').length == 0) {
  			$('body').append('<div id="debug"><p>Alert:</p></div>');
	}	
		$('#debug p').text('Alert: '+to);
		
	};*/
		
	// ! ---------

/*-----------------------
	Load
	-------------------*/
        TweenLite.to($('#main'), 1, {css:{'opacity':'1'}, ease:Power4.easeInOut});
	
	

// ! ---------
	
/*---------------------------
	Main Var / Array / Obj
	------------------------*/
	
	var win = {h:window.innerHeight, w:window.innerWidth, ua:$.browser};
	var page = {h:$("body").css("height").substr(0, $("body").css("height").length-2), w:parseFloat($('body').width())};
	var video = false;
	var videoHeight = win.h-($('.logo').outerHeight(true)*2);
	var pathname = window.location.pathname;
	
	// ! ---------

/*-----------------------
	ScrollTo
	-------------------*/	
	var scroll_ev = function (a, t){
		TweenLite.to(window, t, {scrollTo:{y: a, x:0}, ease:Power4.easeInOut, onComplete:update});
	};

// ! ---------

/*-----------------------
	Next Event
	-------------------*/	
	var scrollNext = function (e){
		e.preventDefault();
		var to = $(this).attr('href');
		if(to!='#'){
			scroll_ev($(to).offset().top-70, 1);
		}else{
			scroll_ev(0, 1);
		}
	};

// ! ---------


/*-----------------------
	Mouse Click
	-------------------*/
	
	$('.play').on('click', playVideo);
	$('.close a').on('click', closeVideo);
	$('.next a').on('click', scrollNext);
	$('.pagination a').on('click', scrollNext);
	$('.reList a').bind('click', shareEv);
	
// ! ---------

/*-----------------------
	Mouse Hover/Out
	-------------------*/
	$('.play').on('mouseover', btHover);
	$('.play').on('mouseleave', btOut);
	$('.close a').on('mouseover', btHover);
	$('.close a').on('mouseleave', btOut);
	
	function  btHover(e){
		e.preventDefault();
		TweenLite.to($(this),0.2, {css:{"background-color":"#dc3741"}});
	
	}
	
	function  btOut(e){
		e.preventDefault();
		TweenLite.to($(this),0.2, {css:{"background-color":""}});
	
	}
		
// ! ---------


/*-----------------------
	Page Share Events
	-------------------*/
	function shareEv(e){
		e.preventDefault();
			
		if($(this).attr('href')=='#facebook'){
			window.open("http://www.facebook.com/sharer.php?u=http%3Aerictheprogrammer.com","Facebook Share","height=300, width=600,scrollbars=yes");
			_gaq.push(['_trackPageview', '/Facebook-Share']);
		}else if($(this).attr('href')=='#twitter'){
			window.open("http://twitter.com/share?text=See%20how%20big%20data%20can%20make%20life%20easier%20@erictheprogrammer%20&url=http%3A//erictheprogrammer.com&hashtags=programming","Twitter Share","height=300, width=600,scrollbars=yes");
			_gaq.push(['_trackPageview', '/Twitter-Share']);
		}else if($(this).attr('href')=='#linkedin'){
			window.open("http://www.linkedin.com/shareArticle?mini=true&url=http%3A//erictheprogrammer.com&title=A%20day%20in%20BIG%20DATA&&source=erictheprogrammer","Linkedin Share","height=400, width=600,scrollbars=yes");
			_gaq.push(['_trackPageview', '/Linkedin-share']);
		}else if($(this).attr('href')=='#google'){
			window.open("https://plus.google.com/share?url=http%3A//erictheprogrammer.com","Google+ Share","height=300, width=600,scrollbars=yes");
			_gaq.push(['_trackPageview', '/Google-share']);
				
		}
	};


/*-----------------------
	Video Events
	-------------------*/

	function playVideo(e){
		e.preventDefault();
		video = true;
		scroll_ev($('.logo').outerHeight(true), 1);
		TweenLite.to($('.video'), 1, {css:{'height':win.h+'px'}, ease:Power4.easeInOut, onComplete:showVideo});
		TweenLite.to($('.description'),1, {css:{'opacity':'0'}, ease:Power4.easeInOut});
		TweenLite.to($('.pagination'),1, {css:{'opacity':'0'}, ease:Power4.easeInOut});
		$('html').css({'overflow':'hidden'});
	}	
	
	function showVideo(){
		TweenLite.to($('.video #youtube'), 0, {css:{'height':win.h+'px', 'width':win.w+'px'}, ease:Power4.easeInOut});
		TweenLite.to($('.description'), 0, {css:{'top':'-100%'}, ease:Power4.easeInOut});
		TweenLite.to($('.pagination'), 0, {css:{'top':'-100%'}, ease:Power4.easeInOut});
		$('.video #youtube').append('http://www.erictheprogrammer.com/');
		$('#main>header>.video>#youtube>#player').css({'margin-top':'40px', 'height':win.h-80+'px', 'width':win.w-80+'px'});
		$('#main>header>.video>#youtube>.close').css({'top':'0'});
		TweenLite.to($('.video #youtube'), 1, {css:{'opacity':'1'}, ease:Power4.easeInOut});
	}
	function closeVideo(e){
		e.preventDefault();
		video = false;
		TweenLite.to($('.video #youtube'), 1, {css:{'opacity':'0'}, ease:Power4.easeInOut, onComplete:deleteVideo});
		TweenLite.to($('.description'), 0, {css:{'top':'50%'}, ease:Power4.easeInOut});
		TweenLite.to($('.pagination'), 0, {css:{'top':'50%'}, ease:Power4.easeInOut});
	}
	function deleteVideo(){
		
		TweenLite.to($('.description'),1, {css:{'opacity':'1'}, ease:Power4.easeInOut});
		TweenLite.to($('.pagination'),1, {css:{'opacity':'1'}, ease:Power4.easeInOut});
		TweenLite.to($('.video #youtube'), 1, {css:{'height':videoHeight+'px'}, ease:Power4.easeInOut});
		TweenLite.to($('.video'), 1, {css:{'height':videoHeight+'px'}, ease:Power4.easeInOut});
		$('html').css({'overflow':'auto'});
		$('.video #youtube #player').remove();
		
		scroll_ev(0, 1);
		
		
	}
	
// ! --------



/*-----------------------
	Apear Events
	-------------------*/
	
	function show(id,xo){
		TweenLite.to($(id),1, {css:{'opacity':'1', scaleX:1, scaleY:1}, ease:Power4.easeInOut, delay:xo});
	}
	
	if( Modernizr.touch){
		
		// avoid scolling animation on touch devices
	
	}else{
		TweenLite.to($('.apear'),0, {css:{'opacity':'0',scaleX:0.9, scaleY:0.9}});
		TweenLite.to($('footer'),0, {css:{'opacity':'0', 'top':'30px'}});
		
		$('#awebdeveloper .apear:eq(0)').waypoint(function() {show($('#awebdeveloper .apear:eq(0)'),0)}, { offset: '90%' });	
		$('#awebdeveloper .apear:eq(1)').waypoint(function() {show($('#awebdeveloper .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#awebdeveloper .apear:eq(2)').waypoint(function() {show($('#awebdeveloper .apear:eq(2)'),0)}, { offset: '80%' });	
		
		$('#primarystack .apear:eq(0)').waypoint(function() {show($('#primarystack .apear:eq(0)'),0)}, { offset: '90%' });
		$('#primarystack .apear:eq(1)').waypoint(function() {show($('#primarystack .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#primarystack .apear:eq(2)').waypoint(function() {show($('#primarystack .apear:eq(2)'),0.25)}, { offset: '80%' });	
		$('#primarystack .apear:eq(3)').waypoint(function() {show($('#primarystack .apear:eq(3)'),0.5)}, { offset: '80%' });	
		
		$('#main .apear:eq(0)').waypoint(function() {show($('#myportfolio .apear:eq(0)'),0)}, { offset: '90%' });
		$('#myportfolio .apear:eq(1)').waypoint(function() {show($('#myportfolio .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(2)').waypoint(function() {show($('#myportfolio .apear:eq(2)'),0.25)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(3)').waypoint(function() {show($('#myportfolio .apear:eq(3)'),0.5)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(4)').waypoint(function() {show($('#myportfolio .apear:eq(4)'),0.75)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(5)').waypoint(function() {show($('#myportfolio .apear:eq(5)'),0)}, { offset: '90%' });
		$('#myportfolio .apear:eq(6)').waypoint(function() {show($('#myportfolio .apear:eq(6)'),0)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(7)').waypoint(function() {show($('#myportfolio .apear:eq(7)'),0.25)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(8)').waypoint(function() {show($('#myportfolio .apear:eq(8)'),0.5)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(9)').waypoint(function() {show($('#myportfolio .apear:eq(9)'),0.5)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(10)').waypoint(function() {show($('#myportfolio .apear:eq(10)'),0.5)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(11)').waypoint(function() {show($('#myportfolio .apear:eq(11)'),0.5)}, { offset: '80%' });	
		$('#myportfolio .apear:eq(12)').waypoint(function() {show($('#myportfolio .apear:eq(12)'),0.5)}, { offset: '80%' });	
		
		$('#workexperience .apear:eq(0)').waypoint(function() {show($('#workexperience .apear:eq(0)'),0)}, { offset: '90%' });
		$('#workexperience .apear:eq(1)').waypoint(function() {show($('#workexperience .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#workexperience .apear:eq(2)').waypoint(function() {show($('#workexperience .apear:eq(2)'),0.25)}, { offset: '80%' });	
		$('#workexperience .apear:eq(3)').waypoint(function() {show($('#workexperience .apear:eq(3)'),0.5)}, { offset: '80%' });	
		$('#workexperience .apear:eq(4)').waypoint(function() {show($('#workexperience .apear:eq(4)'),0.75)}, { offset: '80%' });
		
		$('#myambition .apear:eq(0)').waypoint(function() {show($('#myambition .apear:eq(0)'),0)}, { offset: '90%' });
		$('#myambition .apear:eq(1)').waypoint(function() {show($('#myambition .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#myambition .apear:eq(2)').waypoint(function() {show($('#myambition .apear:eq(2)'),0.25)}, { offset: '80%' });	
		$('#myambition .apear:eq(3)').waypoint(function() {show($('#myambition .apear:eq(3)'),0.5)}, { offset: '80%' });	
		$('#myambition .apear:eq(4)').waypoint(function() {show($('#myambition .apear:eq(4)'),0.75)}, { offset: '80%' });
		
		$('footer').waypoint(function() {TweenLite.to($('footer'),0.5, {css:{'opacity':'1', 'top':'0px'}});}, { offset: '80%' });
	}
	
		
		$('footer').waypoint(function() {$('#main>.pagination>ul>li>a').css({'background':'#FFF'});}, { offset: '40%' }); // add white bg to the nav
		$('footer').waypoint(function() {$('#main>.pagination>ul>li>a').css({'background':''});}, { offset: '60%' }); // rremove white bg to the nav	
	
// ! ------


/*-------------------
	Nav Selector
	-------------------*/
	var navSelector = function (page){
		
		$('.pagination a span').removeClass('navSelect');
		$('.pagination a[href='+'#'+page+'] span').addClass('navSelect');
		
	};
	navSelector('video')

// ! ---------





/*-------------------
	Scroll Events
	-------------------*/

$(window).scroll(function(e){
			var h = window.innerHeight;
			var perc = (win.h*0.01)*50;
			
			
			if($(window).scrollTop()<=$('#awebdeveloper').offset().top-perc){
				navSelector('video');
					
			}else if ($(window).scrollTop()<=$('#primarystack').offset().top-perc){
				navSelector('awebdeveloper');
			}else if ($(window).scrollTop()<=$('#myportfolio').offset().top-perc){
				navSelector('primarystack');
			}else if ($(window).scrollTop()<=$('#workexperience').offset().top-perc){
				navSelector('myportfolio');
			}else if ($(window).scrollTop()<=$('#myambition').offset().top-perc){
				navSelector('workexperience');
			}else if ($(window).scrollTop()<=$('footer iframe').offset().top){
				navSelector('myambition');
			};
	
			
});

// ! Scroll Events



/*-----------------------
	On Resize
	-------------------*/

	function update(){
		win.w=window.innerWidth;
		win.h=window.innerHeight;
		var dh= Math.round($('#main>header>.video>.description').height()*0.5);
		TweenLite.to($('.description'),0.5, {css:{'margin-top':''+(-1*dh)+'px'}});
		
		if(win.h>=530){
			videoHeight = win.h-($('.logo').outerHeight(true)*2);
			
			if(video){
				TweenLite.to(window, 0.1, {scrollTo:{y: $('.logo').outerHeight(true), x:0}, ease:Power4.easeInOut});
				$('.video').css({'height':win.h+'px'});
				$('.video #youtube').css({'height':win.h+'px', 'width':win.w+'px'});
				$('#main>header>.video>#youtube>iframe').css({'height':win.h-80+'px', 'width':win.w-80+'px'});
			}else{
				$('.video').css({'height':videoHeight+'px'});
				$('.video  #youtube').css({'height':videoHeight+'px'});
			}
			
		}else{
			videoHeight = 350;
			
			if(video){
				TweenLite.to(window, 0.1, {scrollTo:{y: $('.logo').outerHeight(true), x:0}, ease:Power4.easeInOut});
				$('.video').css({'height':win.h+'px'});
				$('.video #youtube').css({'height':win.h+'px', 'width':win.w+'px'});
				$('#main>header>.video>#youtube>iframe').css({'height':win.h-80+'px', 'width':win.w-80+'px'});
			}else{
				$('.video').css({'height':videoHeight+'px'});
				$('.video  #youtube').css({'height':videoHeight+'px'});
			}
		}
	};
	update();
	
	
	$(window).resize(function() {
			update();
			
	});
// ! --------


	
});