var laszlovector = angular.module('laszlovector', [])
	.controller('referenceList', function ($scope) {
		$scope.init = function(){
			$scope.references = laszlovectorElements;
			$scope.setIsotope();
		};

		$scope.setIsotope = function(){
			var iso = new Isotope('.referenceList',{
				/*
				masonry: {
					isFitWidth: true
				} */
				itemSelector:'.referenceItems',
				layoutMode:'masonry',
				resizesContainer:true,
				animationEngine:'jQuery',
				sort:''
			});
		};

		$scope.init();
	});