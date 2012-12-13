<?php


include 'datasource.php';
require 'Slim/Slim.php';

//include 'array2json.php';


$app = new Slim();

$app->get('/users', 'getUsers');
$app->get('/users/:pId', 'getUser');
$app->get('/users/search/:pVal', "findUserByName");

$app->get('/surveys', 'getSurveys');
$app->get('/surveys/usersearch/:pPersonId', 'getSurveysFor');
$app->get('/surveys/:pPersonId', 'getSurvey');
$app->get('/surveys/search/:pPersonId', 'findSurveyByName');
$app->post('/surveys', 'addSurvey');

$app->get('/transactions', 'getTransactions');
$app->get('/transactions/:pVal', 'searchTransactions');

$app->get('/dash-surveys/:pVal', 'searchSurveyQuestions');

$app->get('/dash-labistry/:pVal', 'searchEvents');



$app -> get('/', 'status');

$app->run();


//////////////////////
///Users
/////////////////////

function getUsers(){
	global $clientdatasource;
	
	if (!isset($_GET['callback'])) {
        echo (json_encode($clientdatasource));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($clientdatasource)) . ');';
    }

}

function getUser($pId){
	
	global $clientdatasource;
		
	foreach($clientdatasource as $client){	
		if($pId == $client["personId"]){
			if (!isset($_GET['callback'])) {
		        echo (json_encode($client));
		    } else {
		        echo $_GET['callback'] . '(' . (json_encode($client)) . ');';
		    }	
		}
	}
}


function findUserByName($pVal){
	
	global $clientdatasource;
	
	$stack = array();	
	
	foreach($clientdatasource as $client){	
		if(false !== stripos($client["firstName"], $pVal)){
			array_push($stack, $client);
		}else if(false !== stripos($client["lastName"], $pVal)){
			array_push($stack, $client);
		}else if(false !== stripos($client["personId"], $pVal)){
				array_push($stack, $client);
		}
	}
	
	if (!isset($_GET['callback'])) {
        echo (json_encode($stack));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($stack)) . ');';
    }
}


//////////////////////
///Surveys
/////////////////////

function getSurveys(){
	
	global $surveyDatasource;

	if (!isset($_GET['callback'])) {
        echo (json_encode($surveyDatasource));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($surveyDatasource)) . ');';
    }
}

function getSurvey($pId){
	
	global $surveyDatasource;
	
	foreach($surveyDatasource as $survey){	
		if($pId == $survey["surveyId"]){
			if (!isset($_GET['callback'])) {
		        echo (json_encode($survey));
		    } else {
		        echo $_GET['callback'] . '(' . (json_encode($survey)) . ');';
		    }	
		}
	}
}

function findSurveyByName($pVal){
	
	global $surveyDatasource;
	
	$stack = array();
	
	foreach($surveyDatasource as $survey){	
		if(false !== stripos($survey["name"], $pVal)){
			array_push($stack, $survey);
		}else if(false !== stripos($survey["surveyId"], $pVal)){
			array_push($stack, $client);
		}
		
		
	}
	
	if (!isset($_GET['callback'])) {
        echo (json_encode($stack));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($stack)) . ');';
    }
}

function getSurveysFor($pPersonId){
	
	global $surveyDatasource;
	
	$stack = array();	
	
	foreach($surveyDatasource as $survey){
		if($pPersonId == $survey["personId"]){
			array_push($stack, $survey);
		}
	}
	
	if (!isset($_GET['callback'])) {
        echo (json_encode($stack));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($stack)) . ');';
    }
	
}

function addSurvey(){
	$request = Slim::getInstance()->request();
	//$survey = json_decode($request->getBody());
	
	global $surveyDatasource;
	
	echo "OK";

	
}


//////////////////////
///Transactions
/////////////////////

function getTransactions(){
	global $transDatasource;

	if (!isset($_GET['callback'])) {
        echo (json_encode($transDatasource));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($transDatasource)) . ');';
    }
}

function searchTransactions($val){
	global $transDatasource;
	
	$stack = array();
	
	foreach($transDatasource as $trans){
		if($val == $trans["status"]){
			array_push($stack, $trans);
		}
	}

	if (!isset($_GET['callback'])) {
        echo (json_encode($stack));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($stack)) . ');';
    }
}

//////////////////////
///questions
/////////////////////

function searchSurveyQuestions($val){
	global $surveyQDatasource;
	
	$stack = array();
	
	foreach($surveyQDatasource as $q){
		if($val == $q["surveyId"]){
			array_push($stack, $q);
		}
	}

	if (!isset($_GET['callback'])) {
        echo (json_encode($stack));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($stack)) . ');';
    }
}

//////////////////////
///events
/////////////////////

function searchEvents($val){
	global $eventsDatasource;
	
	$stack = array();
	
	foreach($eventsDatasource as $e){
		if($val == $e["userId"]){
			array_push($stack, $e);
		}
	}

	if (!isset($_GET['callback'])) {
        echo (json_encode($stack));
    } else {
        echo $_GET['callback'] . '(' . (json_encode($stack)) . ');';
    }
}

function status(){
	echo "Hi there";
}



?>