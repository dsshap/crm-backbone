//CRM View

window.SrmView = Backbone.View.extend({
	
	initialize: function(){
		console.log("Initializing Srm View");
		this.template = _.template(tpl.get('srm/srm'));
		
		this.searchResults = new SurveyCollection();
		this.surveySearchResultsListView = new SurveySearchResultListView({model: this.searchResults });
	},
	
	render: function(eventName){
		$(this.el).html(this.template());
		$('#survey-search-result-list-id', this.el).html(this.surveySearchResultsListView.render().el);
		return this;
	},
	
	events: {
		"click #search-new-btn-id": "searchNewSurveys"
	},
	
	
	predefinedSearchRouter: function(pRoute){
		if('new' == pRoute) this.searchNewSurveys();
	},
	
	searchNewSurveys: function(eventName){
		this.searchResults.findSurveyByName();
		this.clearSurveySearchInputField();
	},
	
	surveySearch: function(eventName){
		var val = $('#survey-searchText-id').val();
		console.log("Searching SRM for string:"+val);
		
		this.searchResults.findSurveyByName(val);
		
		$('#search-survey').find('a').removeClass('active');
		path.go('#srm');		
	},
	
	updateSrmHeaderLink: function(pPath){
		$('#header-srm-id').find("a").attr('href', pPath);
	},
	
	clearSurveySearchInputField: function(){
		setTimeout(function(){
			$('#survey-searchText-id').val("");
		}, 300);
		
	}
	
});