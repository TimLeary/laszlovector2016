var laszlovector = angular.module('laszlovector', [])
	.controller('referenceList', function ($scope) {
		$scope.references = laszlovectorElements;
		var iso = new Isotope('.referenceList',{
			itemSelector: '.referenceItems',
			masonry: {
				isFitWidth: true
			}
		});
	});