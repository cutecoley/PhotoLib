angular.module('photolib.pages', [])
.controller('photoController', function($scope, photoFactory) {
	$scope.ctlImages = [];
	$scope.rating = [1, 2, 3, 4, 5];
	$scope.selectedImage;
	$scope.init = function() {
		$scope.ctlImages = photoFactory.getImages();
	};
	$scope.showImage = function(image) {
		$scope.selectedImage = image;
	}
	$scope.saveRating = function(title, rate) {
		$scope.selectedImage.rating = photoFactory.changeRating(title, rate);
	}
	$scope.init();
})