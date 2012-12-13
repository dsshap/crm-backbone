//Transaction Model

window.Transaction = Backbone.Model.extend({
	
	urlRoot:'../api/index.php/transaction',
	
	defaults: function(){
		return {
			transactionId: -1,
			customerName: "",
			date: "",
			tokenId: -1,
			referenceId: -1,
			status: "active"
		};
	},
	
	initialize: function(){
		if (!this.get("transactionId")) this.set({"transactionId": this.defaults.transactionId});
		//if (!this.get("customerId")) this.set({"customerId": this.defaults.customerId});
		if (!this.get("customerName")) this.set({"customerName": this.defaults.customerName});
		if (!this.get("date")) this.set({"date": this.defaults.date});
		if (!this.get("tokenId")) this.set({"tokenId": this.defaults.tokenId});
		if (!this.get("referenceId")) this.set({"referenceId": this.defaults.referenceId});
		if (!this.get("status")) this.set({"status": this.defaults.status});
	}
	
});