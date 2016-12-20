/*
	AXF2.0
	lijing
	2016-12-16
*/
//------------------------ajax模板请求--------------------------
$(function(){
	var list1,
		q;
	define(["text!./home.html","$css!./home.css"], function(homePage){
	return {
		init:function(){


			$(".home").html(homePage).show().siblings("div").hide();
			$("header").show();
			$(".div4").hide();
			$(".div1").hide();
			var mySwiper = new Swiper ('.swiper-container', {
					// direction: 'vertical',
					loop: true,
					autoplay:1000,	    
					// 如果需要分页器
					pagination: '.swiper-pagination',
							    
					// 如果需要前进后退按钮
					// nextButton: '.swiper-button-next',
					// prevButton: '.swiper-button-prev',
							    
					// 如果需要滚动条
					scrollbar: '.swiper-scrollbar',
				}); 







			// if($(".home").children().size()>0) return;
			$.ajaxSetup({
				//type请求方式
				//datetype:返回数据类型
				type:"get",
				datetype:"json"
			});
			$.ajax({
				url:"data/list.json",
				//请求成功之后
				success:function(data,textStatus){
					list1 = data;
					console.log(data);
					$("#mydiv").load("template/lists.html",function(){
						var htmlstr = baidu.template("lists",list1);
						$("#main_h").html(htmlstr);
						
						//
						/*if($("#shop").text()==""){
							$("#shop").hide();
							q = 0;
						}else{
							$("#shop").show();
							q = parseInt($("#shop").text());
						}*/
						if(!localStorage.counts){
							$("#shop").hide();
							q = 0;
						}else{
							$("#shop").show();
							q = parseInt(localStorage.counts);
							$("#shop").text(q);
						}
						
						$("strong[name]").on("click",function(e){
							e =e || window.event;
							console.log(e.target);
							$("#shop").show();
							q++;
							
							$("#shop").text(q);
							localStorage.counts = q;
							
						})
					})
					
					  
				}//ajax请求成功后括号
			});//ajax后括号
			
		}//init匿名函数
	}
});
})
// $(document).ready(function () {
// 			var mySwiper = new Swiper ('.swiper-container', {
// 					// direction: 'vertical',
// 					loop: true,
// 					autoplay:1000,	    
// 					// 如果需要分页器
// 					// pagination: '.swiper-pagination',
							    
// 					// 如果需要前进后退按钮
// 					// nextButton: '.swiper-button-next',
// 					// prevButton: '.swiper-button-prev',
							    
// 					// 如果需要滚动条
// 					scrollbar: '.swiper-scrollbar',
// 				}) 
// 		})




