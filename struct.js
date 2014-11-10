/**
 * @author suman
 */

// This requires the latest jquery plugin
$(document).ready(function(){
	var offset=$('.affix').offset().top;
	var leftoff=$('.affix').offset().left;
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		
		if (scrollTop>=offset)
			{
				$('.fixed').css("left",leftoff+"px");
				$('.affix').addClass("fixed");
				
			}
		else
			{
				$('.affix').removeClass("fixed");
			}
	})
	
	
	
})
