//Survey Collection

window.SurveyCollection = Backbone.Collection.extend({

	model: Survey,
	
	//setting up local storage (persists in browser unless call clearStore())

	url:'../api/index.php/surveys',
	 
	newer: function(){
		//implement
	},
	
	//finding someone by personId
	getSurveyById: function(pSurveyId){
		//implement
	},
	
	getSurveysForUser: function(pPersonId){
		var self = this;
		var url = (null == pPersonId ? this.url : this.url+'/usersearch/'+pPersonId)
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(jsonData){
				console.log("Search for surveys created by personId:"+pPersonId+" returned:"+jsonData.length+" results.");
				self.reset(jsonData);
			}
		});
	},
	
	findSurveyByName: function(pVal){
		var self = this;
		
		if("" == pVal){
			return;
		}
		var url = (null == pVal ? this.url : this.url+'/search/'+pVal)
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(jsonData){
				console.log("Search for surveys:"+pVal+" returned:"+jsonData.length+" results.");
				self.reset(jsonData);
			}
		});
	},
	
	addSurvey: function(pParams){
		
		var self = this;
		$.ajax({
		        type: 'POST',
		        contentType: 'application/json',
		        url: this.url,
		        data: this.toJson(pParams),
		        success: function(data, textStatus, jqXHR){
					console.log("Added survey:"+data);
					self.add(new Survey({"name": pParams["title"], "cost": 0.0, "active":true, "personId": pParams["personId"], "surveyId": "90"}))
					//self.add({"name": pParams["title"], "cost": "0.00", "active":true, "personId": pParams["personId"], "surveyId": "90"});
		        },
		        error: function(jqXHR, textStatus, errorThrown){
		            //TODO
		        }
		    });
		
	},
	
	clearStore: function(options){
		options || (options = {});
		while (this.length > 0) {
			this.at(0).destroy(options);
		}
	},
	
	toJson: function(pArray){
		var rtn= "{";
		
		for(var item in pArray){
						
			rtn += ("\""+item+"\"");
			rtn +=":";
			rtn += (this.isNotNullAndNotEmpty(pArray[item]) ? ("\"" + pArray[item] + "\"") : "");
			rtn += ","
			
			// rtn += item;
			// rtn += "=";
			// rtn += (this.isNotNullAndNotEmpty(pArray[item]) ?  pArray[item] : "");
			// rtn += "&"
			
		}
		
		
		rtn = rtn.substring(0, rtn.length-1);
		
		rtn += "}";
		return rtn;
	},
	
	isNotNullAndNotEmpty: function(pVal){
		if(null != pVal && "" != pVal){
			return true;
		}
		return false;
	}
	
	
});