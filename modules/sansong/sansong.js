
$(function(){
	var list2,//ajax请求数据
		htmlstr,//模板加数据
		t,//左侧li的id
		s,//右侧ul的class
		count = 0,
		x=0,
		z,d;
	define(["text!./sansong.html","$css!./sansong.css"], function(homePage){
		return {
			init:function(){
				$(".market").html(homePage).show().siblings("div").hide();
				$("header").show();
				$(".div4").hide();
				$(".div1").hide();
				//ajax请求
				$.ajaxSetup({
					type:"get",
					datetype:"json"
				});
				$.ajax({
					url:"data/market.json",
					//请求成功之后
					success:function(data,textStatus){
						list2 = data;
						console.log(list2);
						$("#mydiv1").load("template/market1.html",function(){
							htmlstr = baidu.template("market1",list2);
							$("#main1").html(htmlstr);
							
							//默认显示第一个li的选中样式
							$("#left li").eq(0).css({
								"background": "#f8f8f8 url(imgs/z.jpg) no-repeat left center",
								"background-size": "0.06rem"
							})
							//右侧菜单全部隐藏
							$("#right ul[class]").hide();
							//默认显示热搜
							$("#right ul").eq(11).show();
							//绑定事件委托
							$("#left").off("click").on("click","li",function(e){
								e = e || window.event;
								//所有样式清空
								$("#left li").css({
									"background": "",	
								});
								//当前对象的选中样式显示
								$(this).css({
									"background": "#f8f8f8 url(imgs/z.jpg) no-repeat left center",
									"background-size": "0.06rem"
								})
								//找到当前点击对象的绑定id属性值
								t = e.target.attributes.id.nodeValue;
								//遍历右侧ul
								$("#right ul[class]").each(function(i){
									//得到右侧ul的class属性值
									s = $("#right ul[class]").eq(i).attr("class");
									//判断点击li的id属性值与ul的class属性值相等的话执行里面的代码
									if(s==t){
										//所有ul隐藏
										$("#right ul[class]").hide();
										//属性值相等的ul显示
										$("#right ul").eq(i).show();
									}
								})
							})
							//找到所有的买一赠一标签判断是否有内容没有的隐藏
							$("b[class]").each(function(i){
								if($("b[class]").eq(i).text()==""){
									$(this).hide();
								}
							})
							//当物品数量为空时让物品标签和减号隐藏
							if($(this).prev().text()===""){
								$("#bs").hide();
								$("span[id]").hide();
							}
							//给加号添加事件
							$("em[name]").on("click",function(i){
								//购物车数量增加
								$("#shop").show();
								count++;
								//判断当物品数量为零时
								if($(this).prev().text()===""){
									x = 0;
									x++;
									$(this).prev().text(x);
									$(this).prev().prev().show();
								}else{
									x=0;
									x++;
									$(this).prev().text(parseInt($(this).prev().text())+x);
								}
								//购物车数字变化
								if(typeof Storage !== "undefined"){
									if(!localStorage.counts){
										localStorage.counts = count;
									}else{
										localStorage.counts++;
									}
									$("#shop").text(localStorage.counts);
								}
							})
							//localStorage.clear();
							$("#shop").text(localStorage.counts);
							if($("#shop").text()==""){
								$("#shop").hide();
							}else{
								$("#shop").show();
							}
							//减号添加事件
							$("span[id]").on("click",function(i){
								var z = parseInt($(this).next().text());
								var d = parseInt($("#shop").text());
								z--;
								d--;
								$("#shop").text(d);
								if(z<1){
									$(this).hide();
									$(this).next().hide();
								}
								$(this).next().text(z);
							})
							
						})//load模板
						
					}
				});
	
			}
		}
	});
})