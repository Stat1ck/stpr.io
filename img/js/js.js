$(document).ready(function(){
	$("body").on('mousewheel', function(){
		let e = $(".menu_mob");
		let offs = e.offset();
		let y = offs.top;
		if(y>=500){
			$(".menu_mob").css({
				backgroundColor:'rgba(116, 193, 205, 0)'
			});
			$(".navig1").css({
				backgroundColor:'rgba(116, 193, 205, 0.8)'
			});
			$(".navig2").css({
				backgroundColor:'rgba(116, 193, 205, 0)'
			});
			$(".head").css({
				backgroundColor:'rgba(116, 193, 205, 0.8)'
			});
		}else if(y<500){
			$(".menu_mob").css({
				backgroundColor:'rgba(0,0,0,0)'
			});
			$(".head").css({
				backgroundColor:'rgba(0, 0, 0, 0.1)'
			});
			$(".navig1").css({
				backgroundColor:'rgba(116, 193, 205, 0.8)'
			});
			$(".navig2").css({
				backgroundColor:'rgba(0,0,0,0)'
			});
		}
	});
	$(".o").mousemove(function(){
		$(".one").css({
			display: 'flex'
		});
	});
	$(".o").mouseleave(function(){
		$(".one").css({
			display: 'none'
		});
	});
	$(".t").mousemove(function(){
		$(".two").css({
			display: 'flex'
		});
	});
	$(".t").mouseleave(function(){
		$(".two").css({
			display: 'none'
		});
	});
	$(".th").mousemove(function(){
		$(".thr").css({
			display: 'flex'
		});
	});
	$(".th").mouseleave(function(){
		$(".thr").css({
			display: 'none'
		});
	});
	$(".f").mousemove(function(){
		$(".fr").css({
			display: 'flex'
		});
	});
	$(".f").mouseleave(function(){
		$(".fr").css({
			display: 'none'
		});
	});
	$(".fv").mousemove(function(){
		$(".fiv").css({
			display: 'flex'
		});
	});
	$(".fv").mouseleave(function(){
		$(".fiv").css({
			display: 'none'
		});
	});
	$(".s").mousemove(function(){
		$(".sx").css({
			display: 'flex'
		});
	});
	$(".s").mouseleave(function(){
		$(".sx").css({
			display: 'none'
		});
	});
	$(".sev").mousemove(function(){
		$(".sn").css({
			display: 'flex'
		});
	});
	$(".sev").mouseleave(function(){
		$(".sn").css({
			display: 'none'
		});
	});
	$(".ei").mousemove(function(){
		$(".eg").css({
			display: 'flex'
		});
	});
	$(".ei").mouseleave(function(){
		$(".eg").css({
			display: 'none'
		});
	});
	$(".nin").mousemove(function(){
		$(".ni").css({
			display: 'flex'
		});
	});
	$(".nin").mouseleave(function(){
		$(".ni").css({
			display: 'none'
		});
	});
	$(".one").click(function(){
		$(".m1").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".two").click(function(){
		$(".m3").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".thr").click(function(){
		$(".m2").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".fr").click(function(){
		$(".m4").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".fiv").click(function(){
		$(".m5").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".sx").click(function(){
		$(".m6").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".sn").click(function(){
		$(".m7").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".eg").click(function(){
		$(".m8").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".ni").click(function(){
		$(".m9").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".btn_connect").click(function(){
		$(".m10").css({
			display: 'flex'
		});
		$("body").css({
			overflow: 'hidden'
		});
		$(".back_for_modal").css({
			display: 'flex'
		});
	});
	$(".close").click(function(){
		$(".modal_win").css({
			display: 'none'
		});
		$("body").css({
			overflow: 'visible'
		});
		$(".back_for_modal").css({
			display: 'none'
		});
	});
	$(".close_for_modal").click(function(){
		$(".modal_w").css({
			display: 'none'
		});
		$("body").css({
			overflow: 'visible'
		});
		$(".back_for_modal").css({
			display: 'none'
		});
	});
});