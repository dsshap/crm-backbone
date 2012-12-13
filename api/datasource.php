<?php

$clientdatasource = array (
	0 => array (
			personId => 1,
			firstName => "David",
			lastName => "Shapiro",
			active => true,
			dateJoined => "2012-03-16",
			location => "New York",
			surveysCreated => 5,
			totalBilled =>  1100.50
	),

			
	1 => array  (
			personId => 2,
			firstName => "Jim",
			lastName => "Siegel",
			active => true,
			dateJoined => "2012-03-16",
			location => "Palo Alto",
			surveysCreated => 2,
			totalBilled =>  1100.50
	),
	
	
	2 => array (
			personId => 3,
			firstName => "Kabari",
			lastName => "Hendrick",
			active => true,
			dateJoined => "2012-03-16",
			location => "Chicago",
			surveysCreated => 6,
			totalBilled =>  1100.00
	),
			
	3 => array (
			personId => 4,
			firstName => "Gauri",
			lastName => "Sharma",
			active => true,
			dateJoined => "2012-03-16",
			location => "St. Louis",
			surveysCreated => 10,
			totalBilled =>  2200.00
	),
		
	4 => array (
			personId => 5,
			firstName => "Andrea",
			lastName => "Kempfer",
			active => true,
			dateJoined => "2012-03-16",
			location => "Philadelphia",
			surveysCreated => 40,
			totalBilled =>  0.00
	),
		
	5 => array (
			personId => 6,
			firstName => "Jonathan",
			lastName => "Pirc",
			active => true,
			dateJoined => "2012-03-16",
			location => "Tampa bay",
			surveysCreated => 3,
			totalBilled =>  400.00
	),
		
	6 => array (
			personId => 7,
			firstName => "Anne",
			lastName => "Sargeant",
			active => true,
			dateJoined => "2012-03-16",
			location => "Toronto",
			surveysCreated => 1,
			totalBilled =>  0.00
	),
		
	7 => array (
			personId => 8,
			firstName => "Stacey",
			lastName => "Hall",
			active => true,
			dateJoined => "2012-03-16",
			location => "Cleveland",
			surveysCreated => 19,
			totalBilled =>  4000.00
	)
);





$surveyDatasource = array (
	0 => array (
			surveyId => 1,
			personId => 1,
			name => "Survey",
			origin => "Lab42",
			active => true,
			cost => 100.50,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		),
	
	1 => array (
			surveyId => 2,
			personId => 1,
			name => "Survey",
			origin => "Lab42",
			active => false,
			cost => 200.00,
			completed => 900,
			disqualified => 600,
			abandoned => 150
		),
	
	2 => array (
			surveyId => 3,
			personId => 1,
			name => "Towel",
			origin => "SurveyGizmo",
			active => true,
			cost => 300.00,
			completed => 4000,
			disqualified => 3000,
			abandoned => 800
		),
		
	3 => array (
			surveyId => 4,
			personId => 1,
			name => "Cereal",
			origin => "Lab42",
			active => false,
			cost => 700.00,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		),
		
	4 => array (
			surveyId => 5,
			personId => 1,
			name => "Towel",
			origin => "SurveyGizmo",
			active => false,
			cost => 200.00,
			completed => 1500,
			disqualified => 600,
			abandoned => 150
		),
		
	5 => array (
			surveyId => 6,
			personId => 2,
			name => "Survey",
			origin => "Lab42",
			active => true,
			cost => 100.00,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		),
		
	6 => array (
			surveyId => 7,
			personId => 2,
			name => "Cereal",
			origin => "SurveyGizmo",
			active => true,
			cost => 500.00,
			completed => 1500,
			disqualified => 600,
			abandoned => 150
		),
		
	7 => array (
			surveyId => 8,
			personId => 3,
			name => "Survey",
			origin => "Lab42",
			active => true,
			cost => 700.00,
			completed => 4000,
			disqualified => 1500,
			abandoned => 800
		),
		
	8 => array (
			surveyId => 9,
			personId => 3,
			name => "Towel",
			origin => "SurveyGizmo",
			active => true,
			cost => 1000.00,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		),
		
	9 => array (
			surveyId => 10,
			personId => 3,
			name => "Survey",
			origin => "SurveyGizmo",
			active => true,
			cost => 1200.00,
			completed => 1500,
			disqualified => 600,
			abandoned => 150
		),
		
	10 => array (
			surveyId => 11,
			personId => 4,
			name => "Survey",
			origin => "Lab42",
			active => true,
			cost => 200.00,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		),
		
	11 => array (
			surveyId => 12,
			personId => 4,
			name => "Towel",
			origin => "SurveyGizmo",
			active => true,
			cost => 400.00,
			completed => 1500,
			disqualified => 600,
			abandoned => 150
		),
		
	12 => array (
			surveyId => 13,
			personId => 5,
			name => "Survey",
			origin => "Lab42",
			active => true,
			cost => 500.00,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		),
		
	13 => array (
			surveyId => 14,
			personId => 1,
			name => "Survey",
			origin => "SurveyGizmo",
			active => true,
			cost => 100.00,
			completed => 1500,
			disqualified => 600,
			abandoned => 150
		),
		
	14 => array (
			surveyId => 15,
			personId => 1,
			name => "Cereal",
			origin => "Lab42",
			active => false,
			cost => 200.00,
			completed => 4000,
			disqualified => 1500,
			abandoned => 800
		),
		
	15 => array (
			surveyId => 16,
			personId => 1,
			name => "Towel",
			origin => "SurveyGizmo",
			active => false,
			cost => 300.00,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		),
		
	16 => array (
			surveyId => 17,
			personId => 1,
			name => "Survey",
			origin => "Lab42",
			active => false,
			cost => 400.00,
			completed => 1500,
			disqualified => 600,
			abandoned => 150
		),
		
	17 => array (
			surveyId => 18,
			personId => 1,
			name => "Cereal",
			origin => "SurveyGizmo",
			active => true,
			cost => 600.00,
			completed => 4000,
			disqualified => 1500,
			abandoned => 800
		),
		
	18 => array (
			surveyId => 19,
			personId => 1,
			name => "Towel",
			origin => "Lab42",
			active => false,
			cost => 1700.00,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		),
		
	19 => array (
			surveyId => 20,
			personId => 1,
			name => "Survey",
			origin => "Lab42",
			active => false,
			cost => 1000.00,
			completed => 1500,
			disqualified => 600,
			abandoned => 150
		),
		
	20 => array (
			surveyId => 21,
			personId => 1,
			name => "Survey",
			origin => "SurveyGizmo",
			active => false,
			cost => 200.00,
			completed => 2000,
			disqualified => 500,
			abandoned => 300
		)
	
);

$transDatasource = array (
	
	0 => array (
			transactionId => 1,
			customerName => "David Shapiro",
			date => "04/10/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "pending"
		),
	1 => array (
			transactionId => 2,
			customerName => "Kabari Hendrick",
			date => "04/10/2012",
			tokenId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			referenceId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			status => "pending"
		),
		
	2 => array (
			transactionId => 3,
			customerName => "Gauri Sharma",
			date => "04/10/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "pending"
		),
		
	3 => array (
			transactionId => 4,
			customerName => "Andrea Kempfer",
			date => "04/10/2012",
			tokenId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "pending"
		),
		
	4 => array (
			transactionId => 5,
			customerName => "Jim Siegel",
			date => "04/10/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			status => "pending"
		),
	
	5 => array (
			transactionId => 6,
			customerName => "Stacey Hall",
			date => "03/29/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "completed"
		),
	6 => array (
			transactionId => 7,
			customerName => "Stacey Hall",
			date => "03/29/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "completed"
		),
	7 => array (
			transactionId => 8,
			customerName => "Stacey Hall",
			date => "03/29/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "completed"
		),
	8 => array (
			transactionId => 9,
			customerName => "Stacey Hall",
			date => "03/29/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "completed"
		),
	9 => array (
			transactionId => 10,
			customerName => "Stacey Hall",
			date => "03/29/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "completed"
		),
	10 => array (
			transactionId => 11,
			customerName => "Stacey Hall",
			date => "03/29/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "completed"
		),
	11 => array (
			transactionId => 12,
			customerName => "Stacey Hall",
			date => "03/29/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "completed"
		),
	12 => array (
			transactionId => 13,
			customerName => "Stacey Hall",
			date => "03/29/2012",
			tokenId => "A83KISPIDNBETW328FN4PS8JJ963KK01",
			referenceId => "J17DHYE73LOPC9367AT2UQ85HMOPX32I",
			status => "completed"
		)
);

$surveyQDatasource = array (
	
	0 => array (
			id => 0,
			surveyId => 0,
			date => "04/10/2012",
			question => "Where are you from?",
			answer1 => "Cleveland",
			answer2 => "Chicago",
			answer3 => "New York",
			answer4 => "Palo Alto",
			
			answer1stat => 1,
			answer2stat => 2,
			answer3stat => 4,
			answer4stat => 3,
			
			totalAnswered => 10
			
		),
	1 => array (
			id => 1,
			surveyId => 0,
			date => "04/11/2012",
			question => "What dog?",
			answer1 => "Huskey",
			answer2 => "Lab",
			answer3 => "Great Dane",
			answer4 => "Bull",
			
			answer1stat => 4,
			answer2stat => 4,
			answer3stat => 2,
			answer4stat => 3,
			
			totalAnswered => 13
			
		),
);

$eventsDatasource = array (
	
	0 => array (
			id => 1,
			userId => 1,
			dateIssued => "04/10/2012",
			title => "Lorem ipsum dolor sit",
			link => "www.something.com/going-some-where",
			cost => "120.00",
			completedDate => "04/11/2012",
		),
		
	1 => array (
			id => 2,
			userId => 1,
			dateIssued => "04/10/2012",
			title => "Vivamus pellentesque leo",
			link => "www.something.com/going-some-where",
			cost => "7,000.00",
			completedDate => "04/11/2012",
		),
		
	2 => array (
			id => 3,
			userId => 1,
			dateIssued => "04/10/2012",
			title => "Praesent scelerisque quam in odio",
			link => "www.something.com/going-some-where",
			cost => "23,000.00",
			completedDate => "04/11/2012",
		),
		
	3 => array (
			id => 4,
			userId => 1,
			dateIssued => "04/10/2012",
			title => "Lorem ipsum dolor sit amet",
			link => "www.something.com/going-some-where",
			cost => "600.00",
			completedDate => "04/11/2012",
		),
		
	4 => array (
			id => 5,
			userId => 1,
			dateIssued => "04/10/2012",
			title => "Vivamus pellentesque. ",
			link => "www.something.com/going-some-where",
			cost => "956.00",
			completedDate => "04/11/2012",
		),
		
	// 5 => array (
	// 		id => 6,
	// 		userId => 1,
	// 		dateIssued => "04/10/2012",
	// 		title => "Praesent scelerisque quam.",
	// 		link => "www.something.com/going-some-where",
	// 		cost => "732.00",
	// 		completedDate => "04/11/2012",
	// 	),
	// 
	// 6 => array (
	// 		id => 7,
	// 		userId => 1,
	// 		dateIssued => "04/10/2012",
	// 		title => "Praesent accumsan non dapibus.",
	// 		link => "www.something.com/going-some-where",
	// 		cost => "732.00",
	// 		completedDate => "04/11/2012",
	// 	),
	// 	
	// 7 => array (
	// 		id => 8,
	// 		userId => 1,
	// 		dateIssued => "04/10/2012",
	// 		title => "Praesent scelerisque quam in odio.",
	// 		link => "www.something.com/going-some-where",
	// 		cost => "732.00",
	// 		completedDate => "04/11/2012",
	// 	),
	// 	
	// 8 => array (
	// 		id => 9,
	// 		userId => 1,
	// 		dateIssued => "04/10/2012",
	// 		title => "Praesent scelerisque dapibus.",
	// 		link => "www.something.com/going-some-where",
	// 		cost => "732.00",
	// 		completedDate => "04/11/2012",
	// 	),
	// 	
	// 9 => array (
	// 		id => 10,
	// 		userId => 1,
	// 		dateIssued => "04/10/2012",
	// 		title => "Praesent scelerisque quam in .",
	// 		link => "www.something.com/going-some-where",
	// 		cost => "732.00",
	// 		completedDate => "04/11/2012",
	// 	),
		
	);


