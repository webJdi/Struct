/**
 * @author suman
 */

// This requires the latest jquery plugin
$(document).ready(function(){
	var offset=$('.affix').offset().top;
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		
		if (scrollTop>=offset)
			{
				$('.affix').addClass("fixed");
			}
		else
			{
				$('.affix').removeClass("fixed");
			}
	})
	
	
	
})
