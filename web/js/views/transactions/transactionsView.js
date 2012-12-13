//Transactions View

window.TransactionsView = Backbone.View.extend({
	
	initialize: function(){
		console.log("Initializing Transactions View");
		this.template = _.template(tpl.get('transactions/transactions'));
		
		// this.transactionsResults = new TransactionsCollection();
		// 
		// this.transactionsResults.bind("reset", this.render, this);
		// this.transactionsResults.bind("add", this.render, this);
		
		this.transactionsPendingResults = new TransactionsCollection();
		this.transactionsCompletedResults = new TransactionsCollection();
		
		this.transactionsPendingResults.bind("reset", this.renderPending, this);
		this.transactionsCompletedResults.bind("reset", this.renderCompleted, this);
		
		
		this.transactionsPendingResults.getPending();
				
	},
	
	// render: function(eventName){
	// 	$(this.el).html(this.template());
	// 	var pendingTransactionBodyElmt = "#transactions-pending-table-body-id";
	// 	var completedTransactionBodyElmt = "#transactions-completed-table-body-id";
	// 	var finishedRowCount = 0;
	// 	
	// 	_.each(this.transactionsResults.models, function(transaction){
	// 
	// 		if("pending" == transaction.get('status')){
	// 			$(pendingTransactionBodyElmt, this.el).append(new TransactionItemView({model: transaction}).render().el);
	// 		}else if("completed" == transaction.get('status')){
	// 			this.addBodyHeaders(finishedRowCount, completedTransactionBodyElmt);
	// 			$(completedTransactionBodyElmt, this.el).append(new TransactionItemView({model: transaction}).render().el);
	// 			finishedRowCount++;
	// 		}
	// 	}, this);
	// 	
	// 	
	// 	return this;
	// },
	
	renderPending: function(evt){
		$(this.el).html(this.template());
		var pendingTransactionBodyElmt = "#transactions-pending-table-body-id";
		
		_.each(this.transactionsPendingResults.models, function(transaction){

			$(pendingTransactionBodyElmt, this.el).append(new TransactionItemView({model: transaction}).render().el);

		}, this);
		
		this.showPending();
		
		return this;
	},
	
	renderCompleted: function(evt){
		$(this.el).html(this.template());
		var completedTransactionBodyElmt = "#transactions-completed-table-body-id";
		var finishedRowCount = 0;
		
		_.each(this.transactionsCompletedResults.models, function(transaction){

			this.addBodyHeaders(finishedRowCount, completedTransactionBodyElmt);
			$(completedTransactionBodyElmt, this.el).append(new TransactionItemView({model: transaction}).render().el);
			finishedRowCount++;
			
		}, this);
		
		this.showCompleted();
		
		return this;
	},
	
	addBodyHeaders: function(rowCount, tableBodyId){
		if(rowCount%8 == 0){
			$(tableBodyId, this.el).append('<tr><th>Id</th><th>Customer Name</th><th>Status</th><th>Date</th><th>Token Id</th><th>Ref Id</th>></tr>');
		}
	},
	
	events: {
		'click #transactions-pending-tab-id': function(){this.transactionsPendingResults.getPending();},
		'click #transactions-completed-tab-id': function(){this.transactionsCompletedResults.getCompleted();},
	},

	
	
	showPending: function(){
		$('#transactions-completed-wrapper-id').hide();
		$('#transactions-pending-wrapper-id').show();
		$('#transactions-pending-tab-id').addClass("active");
	},
	
	
	showCompleted: function(){
		$('#transactions-pending-wrapper-id').hide();
		$('#transactions-completed-wrapper-id').show();
		$('#transactions-completed-tab-id').addClass("active");
	}
	

	
});

window.TransactionItemView = Backbone.View.extend({

	tagName: 'tr',
	
	className: '',
	
	initialize: function(){
		this.template = _.template(tpl.get('transactions/transaction-table-item'));
		this.model.bind("change", this.render, this);
		this.model.bind("destroy", this.close, this);
	},
	
	render: function(eventName){
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
	
});