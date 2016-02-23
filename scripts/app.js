var laszlovector = angular.module('laszlovector', [])
	.controller('referenceList', function ($scope) {
	    $scope.init = function () {
	        $scope.references = laszlovectorElements;
	    };

	    $scope.lightboxHide = function (index) {
	        if (index != 0) {
	            return 'hide';
	        } else {
	            return '';
	        }
	    }

	    $scope.init();
	}).directive('afterRender', function () {
	    return {
	        link: function (scope, element, attrs) {
	            if (scope.$last) {
	                window.isotopeTimer = setTimeout(function () {
	                    var iso = new Isotope('.referenceList', {
	                        masonry: {
	                            columnWidth: 160
	                        },
	                        //itemSelector:'.referenceItems',
	                        layoutMode: 'masonry',
	                        resizesContainer: true,
	                        animationEngine: 'jQuery',
	                        filter: '*'
	                    });

	                    $('.fancybox').fancybox({
	                        padding: 0,

	                        openEffect: 'elastic',
	                        openSpeed: 150,

	                        closeEffect: 'elastic',
	                        closeSpeed: 150,

	                        closeClick: true,
	                    });

	                    clearTimeout(window.isotopeTimer);
	                }, 500);
	            }
	        }
	    };
	});