//Transactions Collection

window.TransactionsCollection = Backbone.Collection.extend({

	model: Transaction,

	url:'../api/index.php/transactions',
	
	getAll: function(){
	
		var self = this;
		
		$.ajax({
			url: this.url,
			dataType: 'json',
			success: function(jsonData){
				console.log("Search for transactions returned:"+jsonData.length+" results.");
				self.reset(jsonData);
			}
		});
	},
	
	_get: function(pVal){
	
		var self = this;
		
		$.ajax({
			url: this.url+"/"+pVal,
			dataType: 'json',
			success: function(jsonData){
				console.log("Search for transactions returned:"+jsonData.length+" results.");
				self.reset(jsonData);
			}
		});
	},
	
	getPending: function(){
		this._get("pending");
	},
	
	getCompleted: function(){
		this._get("completed");
	}	
});