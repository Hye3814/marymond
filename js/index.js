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
		var mst = $('.mmStory');
		var mstInner = $('.mm_inner.fixed');
		var pst = $('.ptStory');
		var pstInner = $('.pt_inner.fixed');
		
		$('.scroll').css('transform','rotate(' + scroll + 'deg)');
		
		if(sct <= 1){
			$('.visual').find('img').addClass('ani_slideLeft');
			$('.visual').find('h2').addClass('ani_slideRight');
		}else{
			$('.visual').find('img').removeClass('ani_slideLeft');
			$('.visual').find('h2').removeClass('ani_slideRight');
		}
		
		/* fixed */
		scrollFixed(mst,mstInner,713);
		scrollFixed(pst,pstInner,1013);
		
		/* animation class  */
		if($(window).width() < 768){
			h2slideUp_mobile(mstInner.find('h2'));
			h2slideUp_mobile(pstInner.find('h2'));
			h2slideUp_mobile($('.pro_new').find('h2'));
			h2slideUp_mobile($('.pro_best').find('h2'));
			h2slideUp_mobile($('.mbassador').find('h2'));
			ani_mobile($('.mmStory').find('p'));
			ani_mobile($('.ptStory').find('p'));
			ani_mobile($('.pro_new').find('p'));
			ani_mobile($('.pro_best').find('p'));
			ani_mobile($('.mbassador').find('p'));
		}else{
			h2slideUp_pc(mstInner.find('h2'));
			h2slideUp_pc(pstInner.find('h2'));
			h2slideUp_pc($('.pro_new').find('h2'));
			h2slideUp_pc($('.pro_best').find('h2'));
			h2slideUp_pc($('.mbassador').find('h2'));
			ani_pc($('.mmStory').find('p'));
			ani_pc($('.ptStory').find('p'));
			ani_pc($('.pro_new').find('p'));
			ani_pc($('.pro_best').find('p'));
			ani_pc($('.mbassador').find('p'));
		}

		/* scroll function */
		function scrollFixed(g,s,n){
			if(sct >= g.offset().top ){
				s.addClass('on');
			}else{
				s.removeClass('on');
			}
			if(sct >= g.offset().top + g.height() - n){
				s.removeClass('on');
				s.addClass('bottom');
			}else{
				s.removeClass('bottom');
			};
		}
		function h2slideUp_mobile(e){
			if(sct >= e.offset().top - 400){
				e.addClass('ani_slideUp');
			}else{
				e.removeClass('ani_slideUp');
			};
		}
		function h2slideUp_pc(e){
			if(sct >= e.offset().top - 900){
				e.addClass('ani_slideUp');
			}else{
				e.removeClass('ani_slideUp');
			};
		}
		function opacity_mobile(e){
			if(sct >= e.offset().top - 400){
				e.addClass('ani_opacity');
			}else{
				e.removeClass('ani_opacity');
			};
		}
		function ani_mobile(i){
			if(sct >= i.offset().top - 400){
				i.addClass('ani');
			}else{
				i.removeClass('ani');
			};
		}
		function ani_pc(i){
			if(sct >= i.offset().top - 900){
				i.addClass('ani');
			}else{
				i.removeClass('ani');
			};
		}
		
	});

});