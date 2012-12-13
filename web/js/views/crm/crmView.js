//CRM View

window.CrmView = Backbone.View.extend({
	
	initialize: function(){
		console.log("Initializing Crm View");
		this.template = _.template(tpl.get('crm/crm'));
		
		this.searchResults = new PersonCollection();
		this.clientSearchResultsListView = new ClientSearchResultListView({model: this.searchResults });
		
	},
	
	render: function(eventName){
		$(this.el).html(this.template());
		$('#client-search-result-list-id', this.el).html(this.clientSearchResultsListView.render().el);
		return this;
	},
	
	events: {
		"click #search-new-btn-id": "searchNewUsers"
	},
	
	predefinedSearchRouter: function(pRoute){
		if('new' == pRoute) this.searchNewUsers();
	},
	
	searchNewUsers: function(eventName){
		this.searchResults.findUserByName();
		this.clearClientSearchInputField();
	},
	
	clientSearch: function(eventName){
		var val = $('#client-searchText-id').val();
		console.log("Searching CRM for string:"+val);
		
		this.searchResults.findUserByName(val);
		
		$('#search-client').find('a').removeClass('active');	
		path.go('#crm');	
	},
	
	updateCrmHeaderLink: function(pPath){
		$('#header-crm-id').find("a").attr('href', pPath);
	},
	
	clearClientSearchInputField: function(){
		setTimeout(function(){
			$('#client-searchText-id').val("");
		}, 300);
		
	}
	
});