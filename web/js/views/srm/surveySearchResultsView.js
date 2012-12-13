//SearchResultListView

window.SurveySearchResultListView = Backbone.View.extend({

	tagName: 'ul',
	
	className: 'nav nav-list search-result-list',
	
	initialize: function(){
		console.log("Initializing SRM SearchResultListView.");
		
		var self = this;
		
		this.model.bind("reset", this.render, this);
		this.model.bind("add", function(person){
			$(self.el).append(new SurveySearchResultListItemView({model: person}).render().el);
		});
	},
	
	//builds html of all items in searchResult
	render: function(eventName){
		this.$el.empty();
		_.each(this.model.models, function(person){
			$(this.el).append(new SurveySearchResultListItemView({model: person}).render().el);
		}, this);
		return this;
	}
	
});

//SearchResultLIstItemView

window.SurveySearchResultListItemView = Backbone.View.extend({
	
	tagName: 'li',
	
	initialize: function(){
		this.template = _.template(tpl.get('srm/search-result-list-item'));
		this.model.bind("change", this.render, this);
		this.model.bind("destroy", this.close, this);
	},
	
	render: function(eventName){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
	
});