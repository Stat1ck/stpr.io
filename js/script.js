$(document).ready(function(){
	$('.black_bars').click(function(){
		$('.link_for_mobile_menu').toggle();
	});
	$("body").on('mousewheel', function(){
		$('.link_for_mobile_menu').hide();
	});
});