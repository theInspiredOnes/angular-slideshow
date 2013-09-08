angular.module('slideshow', [])
	.directive('slideshow', function($timeout) {
		return {
			restrict: "A",
			link: function($scope, $elm, $attrs) {
				var count = 0;
				var interval = parseInt($attrs.slideshow);
				var elements = $elm.children().length;

				$scope.cur = elements;
				$scope.out = -1;

				if (elements <= 1) return;

				(function tick () {
					$scope.out = $scope.cur;
					$scope.cur = count++ % elements;
					$timeout(tick, interval);
					$timeout(function() {$scope.out = -1}, interval/2);
				})();
			}
		};
	});