//Person Collection

window.PersonCollection = Backbone.Collection.extend({

	model: User,
	
	//setting up local storage (persists in browser unless call clearStore())
	//localStorage: new Store("person-backbone"),
	url:'../api/index.php/users',
	
	newer: function(){
		//Implement
	},

	//finding someone by name
	findUserByName: function(pVal){
		var self = this;
		
		if("" == pVal){
			return;
		}
		var url = (null == pVal ? this.url : this.url+'/search/'+pVal)
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(jsonData){
				console.log("Search for user:"+pVal+" returned:"+jsonData.length+" results.");
				self.reset(jsonData);
			}
		});
	},
	
	//finding someone by personId
	getUserById: function(pPersonId){
		//Implement if needed
	},
		
	clearStore: function(options){
		options || (options = {});
		while (this.length > 0) {
			this.at(0).destroy(options);
		}
	}	
});