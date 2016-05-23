(function($){
	var privateFun = function(){
		//
	}
	var PageSwitch = (function(){
		function Pageswitch(element,options){
			this.settings = $.extend(true,$.fn.PageSwitch.default,option||{})
			this.element = element;
			this.init();
		}
		PageSwitch.prototype = {
			init : function(){

			}
		}

		return PageSwitch;
	})();
	$.fn.PageSwitch = function(){
		return this.each(function(){
			var me = $(this);
				instance = me.data("PageSwitch");
			if(!instance){
				instance = new PageSwitch(me,options);
				me.data("PageSwitch",instance);
			}
			if($.type(options) === "string") return instance[options]();
		});
	}

	$.fn.PageSwitch.default = {
		selectors : {
			sections : ".sections",
			section: ".section",
			page: ".pages",
			active: ".active"
		},
		index:0,
		easing:"ease",
		duration:500,
		loop:false,
		pagination:true,
		keyboard:true,
		direction:"vertical",
		callback:""
	}

	$(function(){
		$("[data-PageSwitch]").PageSwitch();
	})

})(jQuery);