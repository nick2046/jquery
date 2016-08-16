define(function (require, exports, module){
	var Index = {
		init: function (){
			var me = this;
			me.events();
			me.$el = $('.app');
		},
		events: function(){
			var me = this;

			$('h1', me.$el ).click(function(e){
				alert( "弹出" + $(e.currentTarget).html() );
			});

			$('h2', me.$el ).click(function(e){
				$('ul', me.$el ).append( '<li>自动生成的li标签</li>' );
				$(e.currentTarget).off();
			});

			// $('ul li').click(function(e){
			// 	alert( "弹出" + $(e.currentTarget).html() );
			// });

			$('ul', me.$el ).on('click','li',function(e){
				alert( "弹出" + $(e.currentTarget).html() );
			});
			// $('ul li').not(':eq(2)').click(function(e){
			// 	alert( "弹出" + $(e.currentTarget).html() );
			// });
		}
	};
	module.exports = Index;
});