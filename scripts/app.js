var laszlovector = angular.module('laszlovector', ['ngSanitize'])
	.controller('referenceList', function ($scope,$window) {
	    var windowElement = angular.element($window);

	    $scope.init = function () {
	        $scope.references = laszlovectorElements;
	        $scope.layoutComplete($window.innerWidth);
	    };

	    $scope.lightboxHide = function (index,showDescription) {
	        if (index != 0 || showDescription == true) {
	            return 'hide';
	        } else {
	            return '';
	        }
	    }

	    $scope.layoutComplete = function(){
			var currentWidth = arguments[0];
			var newWidth = '';

			if(currentWidth > 1206){
				widthNumber = 1206;
			} else if(916 < currentWidth && currentWidth <= 1206){
				widthNumber = 916;
			} else if(626 < currentWidth && currentWidth <= 916) {
				widthNumber = 626;
			} else if(280 < currentWidth && currentWidth <= 626) {
				widthNumber = 320;
			}

			newWidth = ''+widthNumber+'px'

			$('#isotopeContainer').css({
				maxWidth: newWidth
			});

	    }

	    windowElement.bind('resize', function () {
	    	$scope.layoutComplete($window.innerWidth);
		});

	    $scope.init();
	}).directive('afterRender', function () {
	    return {
	        link: function (scope, element, attrs) {
	            if (scope.$last) {
	                window.isotopeTimer = setTimeout(function () {
	                    var iso = new Isotope('.referenceList', {
	                        masonry: {
	                            columnWidth: 290
	                        },
	                        cellsByRow: {
						      columnWidth: 290,
						      rowHeight: 160
						    },
	                        //itemSelector:'.referenceItems',
	                        layoutMode: 'masonry',
	                        //resizesContainer: true,
	                        animationEngine: 'jQuery',
	                        filter: '*'
	                    });

						//iso.on( 'layoutComplete',  scope.layoutComplete);

	                    $('.thumnails').fancybox({
	                        padding: 0,

	                        openEffect: 'elastic',
	                        openSpeed: 150,

	                        closeEffect: 'elastic',
	                        closeSpeed: 150,

	                        closeClick: true
	                    });

	                    clearTimeout(window.isotopeTimer);

	                    $('#isotopeContainer').css({ visibility: 'visible' });

	                }, 50);
	            }
	        }
	    };
	});