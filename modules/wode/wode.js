define(["text!./wode.html","$css!./wode.css"], function(homePage){
	return {
		init:function(){
			$(".mine").html(homePage).show().siblings("div").hide();
			$("header").hide();
			$(".div1").hide();
		}
	}
});