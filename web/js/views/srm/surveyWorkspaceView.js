//Workspace View

window.SurveyWorkspaceView = Backbone.View.extend({
	
	className: 'workspace-wrapper',
	
	initialize: function(){
		console.log("Initializing SRM WorkspaceView");
		this.template = _.template(tpl.get('srm/survey-workspace'));
		

	},
	
	render: function(eventName){
		$(this.el).html(this.template(this.model.toJSON()));

		// _.each(this.surveyResults.models, function(survey){
		// 	
		// 	if(true == survey.get('active')){
		// 		$('#workspace-active-surveys-table-body-id', this.el).append(new SurveyWorkspaceSurveyView({model: survey}).render().el);
		// 		activeRowCount++;
		// 	}else{
		// 		$('#workspace-finished-surveys-table-body-id', this.el).append(new SurveyWorkspaceSurveyView({model: survey}).render().el);
		// 		this.addTHeaders(finishedRowCount, 'workspace-finished-surveys-table-body-id');
		// 		finishedRowCount++;
		// 	}
		// 
		// }, this);
		return this;
	}
	
});

window.SurveyWorkspaceSurveyView = Backbone.View.extend({

	// tagName: 'tr',
	// 
	// initialize: function(){
	// 	this.template = _.template(tpl.get('common/survey-table-item'));
	// 	this.model.bind("change", this.render, this);
	// 	this.model.bind("destroy", this.close, this);
	// },
	// 
	// render: function(eventName){
	// 	$(this.el).html(this.template(this.model.toJSON()));
	// 	return this;
	// }
	
});