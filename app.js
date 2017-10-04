//-----------------index.html----------------
// (function (){

// 	'use strict'

// 	angular.module('myFirstApp' , [])

// 			.controller('myFirstController' , function($scope){
// 				$scope.name = "rohan";
// 				$scope.sayHello = function(){
// 					return "hey hello how are you . angularjs i am coming .be careful you bitch";
// 				};
// 			});

// })();

//iifs helps us from bleeding things to global scope

//----------------nameCalculator.html----------------

(function(){
	'use strict'

	angular.module('nameCalculatoraApp' , [])

			.controller('nameCalculatorController' , function($scope){
				$scope.name = "";
				$scope.totalValue = 0;

				
				$scope.displayNumberic = function(){
					var totalValueNumber =calculateValue($scope.name);

					
					$scope.totalValue = totalValueNumber;
				};

				function calculateValue(string){
					var totalStirngValue = 0 ;
					for (var i = 0; i < string.length; i++) {
						totalStirngValue += string.charCodeAt(i);
					}

					return totalStirngValue ;
				};

				console.log($scope);

			});


})();