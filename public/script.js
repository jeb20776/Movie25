 // create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
					controller  : 'booksCtrl'
			})

			// route for the rules page
			.when('/rules', {
				templateUrl : 'pages/rules.html',
				controller  : 'booksCtrl'
			})

		// route for the team  page
				// route for the team  page
				.when('/movie', {
					templateUrl : 'pages/mymovies.html',
					controller  : 'booksCtrl'
				})

				// route for the team  page

					.when('/note/:noteID', {
						templateUrl : 'pages/note.html',
						controller  : 'booksCtrl'
				})

				// route for the team  page

					.when('/entry', {
						templateUrl : 'pages/entry.html',
						controller  : 'booksCtrl'
				});




	});



	scotchApp.controller('booksCtrl', function($scope, $http, $routeParams) {

/////----CONSTANTS
$scope.entrytitle = "Movie";
$scope.entrymessage = 'Add a Note';
$scope.notestitle = "Notes";
$scope.notesmessage = 'View your Notes';
$scope.notetitle = "Note";
$scope.notemessage = 'View your Note';
$scope.maintitle = "Play Coach";
$scope.mainmessage = 'Play Coach Note Viewer';


/////----CONSTANTS


$http.get('http://www.omdbapi.com/?i=tt0089218&plot=short&r=json')
.then(function(response) {
$scope.moviedetails1 = response.data;
});


		$http.get('/movie')
		.then(function(response) {
		$scope.movie = response.data;
		});

		$scope.getMovieDetails = function(movieid) {

							$http.get('http://www.omdbapi.com/?i=tt0089218&plot=short&r=json')
				.then(function(response) {
					$scope.moviedetails = response.data;
				 });
				//  $location.path('#/notes');
		};





		$scope.saveData = function() {

				console.log($scope.formInfo);
				$http.post('/movie', $scope.formInfo)
				.then(function(response) {
					console.log("test");
				 });
				//  $location.path('#/notes');
		};




		$scope.taggedresults = function(tag)
 		{
			// console.write('tester');
			$scope.tag = tag;
			$http.get("/notes/tags/"+ $scope.tag)
        .then(function(response) {
          $scope.search= response.data;
        });
			};

			$scope.deletenote = function(_id)
			{
				// console.write('tester');
				$scope.deleteid = _id;
				$http.delete("/notes/"+ $scope.deleteid)
					.then(function(response) {
					// $scope.search= response.data;
					});
				};


			$scope.getdetails = function(_id)
	 		{
				// console.write('tester');

				$http.get("/notes/"+ _id)
	        .then(function(response) {
	          $scope.search2 = response.data;
	        });
				};



							$scope.getdetails2 = function()
					 		{
								// console.write('tester');

								$http.get("/notes/"+ $routeParams.noteID)
					        .then(function(response) {
					          $scope.search3 = response.data;
					        });
								};




//figure out how to call api with input
    // $scope.getID = function(input)
    // $http.get("http://localhost:3000/notes")
    // .then(function(response) {
    //   $scope.notes = response.data;
    // });


			$scope.domath2 = function(num1, num2){return num1+num2;};
	  		$scope.domath = function(num1, num2){return num1+num2;};

				// $scope.selectednoteID = $routeParams.noteID;


});


	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
	  $scope.title = "NCAA Pick 8 Challenge";
		$scope.message = 'Pick 8 Site';
		//$scope.tester = 'Tester was successful';
	});

	scotchApp.controller('rulesController', function($scope) {
		$scope.title = "About";
		$scope.message = 'Tourney Rules';
		$scope.rules ="Hello March Madness fans, The NCAA men's college basketball tournament is back! Known for its surprising upsets, buzzer beating shots, and cinderella teams, this year's tournament should prove to be just as exciting as tournaments in years past. Overall #1 seed Kentucky enters the tournament undefeated at 34-0 and is attempting to be the first team to win the tournament and go undefeated since the 1976 Indiana team. Will any team in this tournament field be able to defeat Kentucky? We'll find out over the next 3 weeks of action. Adam Gleichenhaus and Sam Seto will be running this pool again. Also, Adam and Sam will be participating and Jeffrey Barrow will validate Adam and Sam's entries and ensure that they are submitted on time.This pool is not a typical bracket pool and primarily involves picking just 8 teams. We hope you find it to be unique and challenging. The pool rules as well as the entry form can be found in the attached file.Each person is allowed up to two entries and they cannot be identical ($15 per entry). All entries must be in by Thursday, March 19th 12PM EST. Entries sent prior to Thursday morning are appreciated. Please send entries to Adam (adamgleich@aol.com) and Sam (seto.sam@gmail.com). Please do not reply to this email. Send a separate email as the entry may be lost because of the way gmail sorts emails.lease pay Adam or Sam in person (by noon on Thursday, March 19th). If this is not possible, the following payment options are available to you: Chase Quickpay (please contact Adam) or arrange payment by check (please contact Sam). Check must be postmarked no later than Wednesday, March 18th.ailure to make or arrange for payment on time will invalidate entries that are submitted.ll Credit Suisse employees should give their money to Adam.The 2015 NCAA tournament bracket can be found at:http://www.cbssports.com/collegebasketball/ncaa-tournament/brackets/viewable_menGood luck to all and enjoy the Madness!";

	});
