//User Model

window.User = Person.extend({
	
	urlRoot:'../api/index.php/users',
	
	defaults: function(){
		return {
			active: false,
			dateJoined: "",
			location: "",
			surveysCreated: 0,
			totalBilled: 0
		};
	},
	
	initialize: function(){
		if (!this.get("active")) this.set({"active": this.defaults.active});
		if (!this.get("dateJoined")) this.set({"dateJoined": this.defaults.dateJoined});
		if (!this.get("location")) this.set({"location": this.defaults.location});
		if (!this.get("surveysCreated")) this.set({"surveysCreated": this.defaults.surveysCreated});
		if (!this.get("totalBilled")) this.set({"totalBilled": this.defaults.totalBilled});
	},
	
	logout: function(){
		this.set({"active": false});
	},
	
	login: function(){
		this.set({"active": true});
	}	
	
});