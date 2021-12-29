$(document).ready(function(){
	var navWrap = $('#navWrap');
	
	$('.header_icon').click(function(){
		$('.mask').show().toggleClass('open');
		$(this).toggleClass('on');
		navWrap.stop().fadeToggle('easeIn');
	});
	
	$(window).scroll(function(){
		var sct = $(this).scrollTop();
		var scroll = sct / 4;
		
		$('.scroll').css('transform','rotate(' + scroll + 'deg)');
		
		if(sct <= 1){
			$('.visual_pc').addClass('ani_slideUp');
			$('.visual_mobile').addClass('ani_slideUp');
			$('.visual').find('h2').addClass('ani_slideUp_delay');
			$('.visual').find('strong').addClass('ani');
		}else{
			$('.visual_pc').removeClass('ani_slideUp');
			$('.visual_mobile').removeClass('ani_slideUp');
			$('.visual').find('h2').removeClass('ani_slideUp_delay');
			$('.visual').find('strong').removeClass('ani');
		}
		
		/* animation class 異붽� */
		if($(window).width() < 768){
			h2slideUp_mobile($('.story1').find('h2'));
			h2slideUp_mobile($('.story2').find('h2'));
			h2slideUp_mobile($('.story3').find('h2'));
			h2slideUp_mobile($('.story4').find('h2'));
			opacity_mobile($('.mmy'));
			ani_mobile($('.story2').find('p'));
			ani_mobile($('.story3').find('p'));
			ani_mobile($('.story4').find('p'));
		}else{
			h2slideUp_pc($('.story1').find('h2'));
			h2slideUp_pc($('.story2').find('h2'));
			h2slideUp_pc($('.story3').find('h2'));
			h2slideUp_pc($('.story4').find('h2'));
			opacity_pc($('.mmy'));
			ani_pc($('.story2').find('p'));
			ani_pc($('.story3').find('p'));
			ani_pc($('.story4').find('p'));
		}

		/* scroll function */
		function h2slideUp_mobile(e){
			if(sct >= e.offset().top - 400){
				e.addClass('ani_slideUp');
			};
		}
		function h2slideUp_pc(e){
			if(sct >= e.offset().top - 900){
				e.addClass('ani_slideUp');
			};
		}
		function opacity_mobile(e){
			if(sct >= e.offset().top - 400){
				e.addClass('ani_opacity');
			};
		}
		function opacity_pc(e){
			if(sct >= e.offset().top - 900){
				e.addClass('ani_opacity');
			};
		}
		function ani_mobile(i){
			if(sct >= i.offset().top - 400){
				i.addClass('ani');
			};
		}
		function ani_pc(i){
			if(sct >= i.offset().top - 900){
				i.addClass('ani');
			};
		}
		
	});

});