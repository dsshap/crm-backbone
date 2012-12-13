
window.AppView = Backbone.Router.extend({
	
	routes:{
        "":"home",
		"home": "home",
		"crm": "crm",
		"srm": "srm",
		"transactions": "transactions",
		"transactions/:pVal": "loadTrans",
		"srm/:pId": "loadSurvey",
		"crm/:pId": "loadUser",
        "contact":"contact"
    },
	
	initialize: function(){
		console.log("Loading initial html Views");
				
		
		window.surveyResults = new SurveyCollection;
		
		//searchResults.fetch();
		//surveyResults.fetch();
		
		//searchResults.bind('reset', this.render, this);
		
		surveyResults.bind('reset', this.render, this);
		//PersonCollection.bind('all', this.render, this);
		
		this.headerView = new HeaderView();
		$('.header').html(this.headerView.render().el);
		
	},
	
	home: function(){
		if(!this.homeView){
			this.homeView = new HomeView();
			this.homeView.render();
		}
		$('#info-pages').html(this.homeView.el);
		this.changeActiveTabCSS('home')
	},
	
	crm: function(){
		if(!this.crmView){
			this.crmView = new CrmView();
			this.crmView.render();
		}
		
		$('#crm-page').html(this.crmView.el);
		this.changeActiveTabCSS('crm');
	},
	
	srm: function(){
		if(!this.srmView){
			this.srmView = new SrmView();
			this.srmView.render();
		}
		
		$('#srm-page').html(this.srmView.el);
		this.changeActiveTabCSS('srm');
	},
	
	transactions: function(){
		if(!this.transactionsView){
			this.transactionsView = new TransactionsView();
			this.transactionsView.render();
		}

		$('#transactions-page').html(this.transactionsView.el);
		this.changeActiveTabCSS('transactions');
	},
	
	contact: function(){
		if(!this.contactView){
			this.contactView = new ContactView();
			this.contactView.render();
		}
		$('#info-pages').html(this.contactView.el);
		this.changeActiveTabCSS('contact')
	},
	
	changeActiveTabCSS: function(pPartialId){
		
		$('#header-nav-id').find('li').removeClass('active');
		
		var tabId = '#header-'+pPartialId+'-id';
		
		$(tabId).addClass("active");
		
		this.hidePageContent(pPartialId);
	},
	
	hidePageContent: function(pPartialId){
		
		// $('#info-pages').hide();
		// $('#crm-page').hide();
		// $('#srm-page').hide();
		
		if('crm' == pPartialId){
			$('#info-pages').hide();
			$('#srm-page').hide();
			$('#transactions-page').hide();
			$('#crm-page').fadeIn('slow');
		}else if('srm' == pPartialId){
			$('#info-pages').hide();
			$('#crm-page').hide();
			$('#transactions-page').hide();
			$('#srm-page').fadeIn('slow');
		}else if('transactions' == pPartialId){
			$('#info-pages').hide();
			$('#crm-page').hide();
			$('#srm-page').hide();
			$('#transactions-page').fadeIn('slow');
		}else{
			$('#crm-page').hide();
			$('#srm-page').hide();
			$('#transactions-page').hide();
			$('#info-pages').delay(300).fadeIn('slow');
		}
		
		
		// if('crm' == pPartialId){ $('#crm-page').fadeIn('slow');	}
		// 	if('srm' == pPartialId){ $('#srm-page').fadeIn('slow'); }
		// 	if('home' == pPartialId){ $('#info-pages').fadeIn('slow'); }
		// 	if('contact' == pPartialId){ $('#info-pages').fadeIn('slow'); }
		
		
	
		//if('home' == pPartialId){ $('#home-page').fadeIn('slow'); }
		//if('contact' == pPartialId){ $('#contact-page').fadeIn('slow'); }

	},
	
	searchClients: function(pName){
		this.crm();
		
		if(this.checkPreDeterminedSearch(pName)){
			return;
		}		
	},
	
	loadUser:function(pId){
		
		this.changeActiveTabCSS('crm');
		
		if(this.checkPredefinedClientSearch(pId)){
			return;
		}
		
		if(!this.crmView) this.crm();
		
		var user = new User({id: pId}), that = this;
		
		user.fetch({
			success:function (jsonData) {
				console.log("Found data for User:"+pId+".");
				
				var clientWorkspace= new ClientWorkspaceView({model: jsonData});
				
				clientWorkspace.surveyResults.getSurveysForUser(clientWorkspace.model.get('personId'));
				
				$('#client-workspace').html(clientWorkspace.render().el)
				
				that.crmView.updateCrmHeaderLink('#crm/'+pId);
			}
		});
		
		$('#client-search-result-list-id').find('li').removeClass('active');
		var personItem = '#crm-result-list-item-'+pId;
		$(personItem).parent().addClass('active');
	},
	
	loadSurvey: function(pId){
		
		this.changeActiveTabCSS('srm');
		
		if(this.checkPredefinedSurveySearch(pId)){
			return;
		}
		
		if(!this.srmView) this.srm();
		
		var survey = new Survey({id: pId}), that = this;
		
		survey.fetch({
			success: function(jsonData){
				console.log("Found data for survey:"+pId+".");
				
				var surveyWorkspace = new SurveyWorkspaceView({model: jsonData});
				$('#survey-workspace').html(surveyWorkspace.render().el);
				
				$("#survey-info-table-id").visualize({	
										appendKey: true,
										appendTitle: true,
										colors: ["#27ab2c","#ee4343", "#e6a729"],
										parseDirection: "x",
										//pieLabelPos: "outside",
										pieMargin: "40",
										type: "pie",
										width: "480px",
										height: "320px",
										pieLabelPos: "inside"
									}).appendTo("#survey-info-pie-id");
									
				that.srmView.updateSrmHeaderLink('#srm/'+pId);
			}
		});
		
		$('#survey-search-result-list-id').find('li').removeClass('active');
		var surveyItem = '#srm-result-list-item-'+pId;
		$(surveyItem).parent().addClass('active');
	},
	
	// loadTrans: function(pVal){
	// 	this.changeActiveTabCSS('transactions');
	// 	
	// 	if(this.checkPredefinedTransactionSearch(pVal)){
	// 		return;
	// 	}
	// 	
	// 	if(!this.transactionsView) this.transactions();
	// 	
	// 	this.transactionsView.transactionsResults.getAll(pVal);
	// 	
	// 	// var trans = new TransactionsCollection({id: pVal}), that = this;
	// 	// 		
	// 	// 		trans.fetch({
	// 	// 			success:function (jsonData) {
	// 	// 				console.log("Found data for Trans search:"+pVal+".");
	// 	// 				
	// 	// 				
	// 	// 	
	// 	// 				
	// 	// 				that.transactionsView.transactionsResults.reset(jsonData);
	// 	// 				
	// 	// 
	// 	// 				
	// 	// 				//that.crmView.updateCrmHeaderLink('#crm/'+pId);
	// 	// 			}
	// 	// 		});
	// 	
	// },
	// 
	// checkPredefinedTransactionSearch: function(pRoute){
	// 		if(('pending' == pRoute) || ('completed' == pRoute)){
	// 			
	// 			if(!this.transactionsView) this.transactions();
	// 			
	// 			this.transactionsView.predefinedSearchRouter(pRoute);
	// 			
	// 			$("#transactions-seach-id").find('a').removeClass('active');
	// 			
	// 			var tabId = '#transaction-'+pRoute+'-tab-id';
	// 			$(tabId).addClass('active');
	// 			
	// 			return true;
	// 		}
	// },
	
	checkPredefinedSurveySearch: function(pRoute){
		
		if(('new' == pRoute) || ('power' == pRoute) || ('favorites' == pRoute) || ('helping' == pRoute)){
			
			if(!this.srmView) this.srm();
			
			this.srmView.predefinedSearchRouter(pRoute);
			
			$('div.well').find('a').removeClass('active');
						
			var btnId = '#survey-search-'+pRoute+'-btn-id';
			$(btnId).addClass('active');
			
			return true;
		}
	},
	
	checkPredefinedClientSearch: function(pRoute){
		
		if(('new' == pRoute) || ('power' == pRoute) || ('favorites' == pRoute) || ('helping' == pRoute)){
			
			if(!this.crmView) this.crm();
			
			this.crmView.predefinedSearchRouter(pRoute);
			
			$('div.well').find('a').removeClass('active');
						
			var btnId = '#client-search-'+pRoute+'-btn-id';
			$(btnId).addClass('active');
			
			this.crmView.updateCrmHeaderLink('#crm/'+pRoute);
			
			return true;
		}
	}
	
});

//Preload all templates
tpl.loadTemplates(['home', 'header', 'crm/crm', 'contact', 'crm/search-result-list-item', 'crm/client-workspace', 'crm/survey-table-item', 'srm/srm', 'srm/search-result-list-item', 'srm/survey-workspace', 'transactions/transactions', 'transactions/transaction-table-item'],
    function () {
	
		//var Persons = new PersonCollection;
        window.app = new AppView();
		
		//searchResults.create({firstName: "Dave", lastName: "Shapiro"});
		
		//searchResults.clearStore();
		
		
		Backbone.history.start();
    });