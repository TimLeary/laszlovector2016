var laszlovector = angular.module('laszlovector', [])
	.controller('referenceList', function ($scope) {
		$scope.init = function(){
			$scope.references = laszlovectorElements;
		};

		$scope.lightboxHide = function(index){
			if(index != 0){
				return 'hide';
			} else {
				return '';
			}
		}

		$scope.init();
	});


	laszlovector.directive('afterRender', function () {
		return {
		  link: function (scope, element, attrs) {
		  	console.log('scope - ',scope.reference);
			if (scope.$last){
				window.isotopeTimer = setInterval(function(){ 
					var iso = new Isotope('.referenceList',{
						masonry: {
							columnWidth : 160
						},
						//itemSelector:'.referenceItems',
						layoutMode:'masonry',
						resizesContainer:true,
						animationEngine:'jQuery',
						filter: '*'
					});
				    window.lightbox.option({
				      'resizeDuration': 200,
				      'wrapAround': true
				    });
					clearInterval(window.isotopeTimer);
				}, 50);
			}
		  }
		}
	});