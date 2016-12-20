
define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			home: "home",
			market: "market",
			order: "order",
			mine: "mine",
			""	:"home",
		},
		/*"":function(){
			require(["modules/home/home.js"],function(home){
				home.init();
			});
		},*/
		home: function(){
			require(["modules/home/home.js"],function(home){
				home.init();
			});
		},
		market: function(){
			require(["modules/sansong/sansong.js"],function(market){
				market.init();
			});
		},
		order: function(){
			require(["modules/shopcar/shopcar.js"],function(order){
				order.init();
			});
		},
		mine: function(){
			require(["modules/wode/wode.js"],function(mine){
				mine.init();
			});
		},
	});
	return new Router();
});