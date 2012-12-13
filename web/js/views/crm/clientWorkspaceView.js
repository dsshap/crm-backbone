//Workspace View

window.ClientWorkspaceView = Backbone.View.extend({
	
	className: 'workspace-wrapper',
	
	initialize: function(){
		console.log("Initializing CRM WorkspaceView");
		this.template = _.template(tpl.get('crm/client-workspace'));
		
		this.surveyResults = new SurveyCollection();
		
		this.surveyResults.bind("reset", this.render, this);
		this.surveyResults.bind("add", this.render, this);
		
	},
	
	render: function(eventName){
		$(this.el).html(this.template(this.model.toJSON()));
		var activeRowCount = 0;
		var finishedRowCount = 0;
		var activeSurveyBodyElmt = '#workspace-active-surveys-table-body-id';
		var finishedSurveyBodyElmt= '#workspace-finished-surveys-table-body-id';
		_.each(this.surveyResults.models, function(survey){
			
			if(true == survey.get('active')){
				this.addHeadersActive(activeRowCount);
				$(activeSurveyBodyElmt, this.el).append(new ClientWorkspaceSurveyView({model: survey}).render().el);
				activeRowCount++;
			}else{
				this.addHeadersFinished(finishedRowCount);
				$(finishedSurveyBodyElmt, this.el).append(new ClientWorkspaceSurveyView({model: survey}).render().el);
				this.addBodyHeaders(finishedRowCount, finishedSurveyBodyElmt);
				finishedRowCount++;
			}
		}, this);
		
		if(0 == activeRowCount){
			$(activeSurveyBodyElmt, this.el).append('<tr"><td>No active surveys exist yet.</td><tr>');
		}
		
		if(0 == finishedRowCount){
			$(finishedSurveyBodyElmt, this.el).append('<tr"><td>No finished surveys exist yet.</td><tr>');
		}
		
		return this;
	},
	
	addHeadersActive: function(rowCount){
		if(rowCount == 0 ){
			$("#workspace-active-surveys-table-thead-id", this.el).append('<tr><th>Id</th><th>Name</th><th>Origin</th><th>Status</th><th>Cost</th></tr>');
		}
	},
	
	addHeadersFinished: function(rowCount){
		if(rowCount == 0 ){
			$("#workspace-finished-surveys-table-thead-id", this.el).append('<tr><th>Id</th><th>Name</th><th>Origin</th><th>Status</th><th>Cost</th></tr>');
		}
	},
	
	addBodyHeaders: function(rowCount, tableId){
		if(rowCount !=0 && rowCount%7 == 0){
			$(tableId, this.el).append('<tr><th>Id</th><th>Name</th><th>Origin</th><th>Status</th><th>Cost</th></tr>');
		}
	},
	
	events: {
		"click tr": "surveySelected",
		"click #save-new-survey-id": "saveNewSurveyForUser"
	},
	
	
	saveNewSurveyForUser: function(pEventName){
		console.log("Saving new survey...")
		
	//	$('#client-new-survey-processing-id').modal('show');
		
		$('#client-new-survey-form-id').modal('hide');
		
		var params = [], form;
		var inputs = $('#form-client-new-survey-id').find('input');
		var selects = $('#form-client-new-survey-id').find('select');
		
		_.each(inputs, function(input){
			if(input.type == "text"){
				params[input.name] = input.value;
			}else if(input.type == "radio"){
				if(input.checked){
					params[input.name] = input.value;
				}
			}
		}, this);
		
		_.each(selects, function(selects){
			if(selects.type == "select-multiple"){
				params[selects.name] = $('#'+selects.id).val();
			}else{
				params[selects.name] = selects.value;
			}
		}, this);
		
		params["personId"] = this.model.attributes.id;
		
		this.surveyResults.addSurvey(params);
		
		//$('#client-new-survey-processing-id').modal('hide');		
		
	},
	
	updateNewSurveyProgBar: function(pPercentage){
		$('#new-survey-process-id').css('width', pPercentage+"%");
	},
	
	surveySelected: function(pEventName){
		var id = pEventName.currentTarget.cells[0].innerHTML;
		
		id = parseInt(id);
		
		if(!isNaN(id)){
			console.log("User Selected to view Survey. [id:"+id+"]");
		
			path.go("#srm/"+id);
		}
	}
	
});

window.ClientWorkspaceSurveyView = Backbone.View.extend({

	tagName: 'tr',
	
	className: 'survey-result-list-pointer',
	
	initialize: function(){
		this.template = _.template(tpl.get('crm/survey-table-item'));
		this.model.bind("change", this.render, this);
		this.model.bind("destroy", this.close, this);
	},
	
	render: function(eventName){
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
	
});