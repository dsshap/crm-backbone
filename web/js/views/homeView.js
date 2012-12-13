//Home View

window.HomeView = Backbone.View.extend({
	
	initialize: function(){
		console.log("Initializing HomeView");
		this.template = _.template(tpl.get('home'));
	},
	
	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	}
	
});