var laszlovector = angular.module('laszlovector', [])
	.controller('referenceList', function ($scope) {
		$scope.init = function(){
			$scope.references = laszlovectorElements;
			$scope.setIsotope();
		};

		$scope.setIsotope = function(){
			var iso = new Isotope('.referenceList',{
				masonry: {
					columnWidth : 160
				},
				itemSelector:'.referenceItems',
				layoutMode:'masonry',
				resizesContainer:true,
				animationEngine:'jQuery'
			});
		};

		$scope.init();
	});