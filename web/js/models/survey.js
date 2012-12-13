//Survey Model

window.Survey = Backbone.Model.extend({
	
	urlRoot: '../api/index.php/surveys',
	
	defaults: function(){
		return {
			surveyId:-1,
			personId: -1,
			name: '',
			origin: '',
			active: false,
			cost: 0
			
		};
	},
	
	initialize: function(){
		if (!this.get("surveyId")) this.set({"surveyId": this.defaults.surveyId});
		if (!this.get("personId")) this.set({"personId": this.defaults.personId});
		if (!this.get("name")) this.set({"name": this.defaults.name});
		if (!this.get("origin")) this.set({"origin": this.defaults.origin});
		if (!this.get("active")) this.set({"active": this.defaults.active});
		if (!this.get("cost")) this.set({"cost": this.defaults.cost});

	},
	
	
	clear: function(){
		this.destroy();
	}

});
