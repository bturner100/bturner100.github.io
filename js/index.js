$(document).ready(function(){
	$("img").click(function(e){
		$(this).siblings(".team-box p").toggleClass("hidden");
		$(this).siblings(".single-box p").toggleClass("hidden")
		$(this).parent().toggleClass("empty");
		
	});
	
	});