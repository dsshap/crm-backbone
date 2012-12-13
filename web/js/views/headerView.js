//Header View
window.HeaderView = Backbone.View.extend({
	
	initialize: function(){
		console.log("Initializing HeaderView");
		this.template = _.template(tpl.get('header'));
	},
	
	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	}
	
});