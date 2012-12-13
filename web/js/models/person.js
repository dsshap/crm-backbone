//Person Model

window.Person = Backbone.Model.extend({
	
	defaults: function(){
		return {
			personId: -1,
			firstName: "",
			lastName: "",
		};
	},
	
	initialize: function(){
		if (!this.get("personId")) this.set({"personId": this.defaults.personId});
		if (!this.get("firstName")) this.set({"firstName": this.defaults.firstName});
		if (!this.get("lastName")) this.set({"lastName": this.defaults.lastName});
	},
	
	
	clear: function(){
		this.destroy();
	}

});
