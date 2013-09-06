angular.module('slideshow', [])
	.directive('slideshow', function($timeout) {
		return {
			restrict: "A",
			link: function($scope, $elm, $attrs) {
				var count = 0;
				var interval = parseInt($attrs.interval);
				var elements = parseInt($attrs.slideshow);

				$scope.current = 0;
				$scope.fadeout = false;

				if (elements <= 1) return;

				(function tick () {
					$scope.current = count++ % elements;
					$scope.fadeout = true;
					$timeout(tick, interval);
					$timeout(function() {$scope.fadeout = false}, interval/2);
				})();
			}
		};
	});