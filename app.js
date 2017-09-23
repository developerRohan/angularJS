(function (){

	'use strict'

	angular.module('myFirstApp' , [])

			.controller('myFirstController' , function($scope){
				$scope.name = "rohan";
				$scope.sayHello = function(){
					return "hey hello how are you . angularjs i am coming .be careful you bitch";
				};
			});

})();

//iifs helps us from bleeding things to global scope