define(["text!./shopcar.html","$css!./shopcar.css"], function(homePage){
	return {
		init:function(){
			// if($(".home").children().size()>0) return;
			$(".order").html(homePage).show().siblings("div").hide();
			$("header").hide();
			$(".div4").hide();
		}
	}
});