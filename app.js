require.config({
	// "./"：代表目前所在的目录  "../"：代表上一层目录  以"/"开头：代表根目录
	paths: {
		//参数可使用数据 加载优先级按小标从小到大顺序
		"jquery": "js/jquery-1.8.1",
		"text": "js/text",
		"backbone": "js/backbone",
		"underscore": "js/underscore",
		"$css": "js/css",
		"json":"data/list.json",
		"baidu":"js/baiduTemplate",
		// "lazy":"js/jquery.lazyload",
		"swiper":"js/swiper-3.4.0.min",
	}
	//使用baseUrl设置默认路径
	// baseUrl : "js"
});
require(['jquery','backbone','router.js','baidu',"swiper"],function($,Backbone){
    Backbone.history.start();
});