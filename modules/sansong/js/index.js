/*// s
//------------------------ajax模板请求--------------------------
window.onload = function(){
	var list1,
		list2;
	var mydiv = $("#mydiv");
	$.ajaxSetup({
		//type请求方式
		//datetype:返回数据类型
		type:"get",
		datetype:"json"
	});
	$.ajax({
		url:"data/list.json",
		//请求错误之后
		error:function(){
			console.log("请求错误")
		},
		//请求成功之后
		success:function(data,textStatus){
			list1 = data;
			console.log(data);
			mydiv.load("template/indexmiaosha.html",function(){
				// var htmlstr = baidu.template("miaosha",list1);
				var htmlstr = baidu.template("miaosha1",list1);
				$("#list_1").html(htmlstr);
			})

			mydiv.load("template/youxuan.html",function(){
				// var htmlstr = baidu.template("miaosha",list1);
				var htmlstr = baidu.template("youxuan",list1);
				$("#list_5").html(htmlstr);
			})
		}
	});

	// $.ajax({
	// 	url:"data/list.json",
	// 	//请求错误之后
	// 	error:function(){
	// 		console.log("请求错误")
	// 	},
	// 	//请求成功之后
	// 	success:function(data,textStatus){
	// 		list2 = data;
	// 		console.log(data);
			
	// 	}
	// });
}*/



define(["text!./index.html","$css!./index.css"],function(indexPage){
	return {
		init:function(){
			$(".index").html(indexPage).show();
		}
	}
})

