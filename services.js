angular.module('photolib.services', [])
.factory('photoFactory', function() {
	var images = [
	{title: 'Square Dog Haircut', image : 'http://m5.paperblog.com/i/140/1400251/top-10-four-equal-sided-dog-square-grooming-L-_R_c7C.jpeg', rating: 2},
	{title: "Kalev's Face", image : 'http://mvistatic.com/of-photos/2011/01/24/ag30_1225607_2_px_640_.jpg', rating: 2},
	{title: 'Polar Bears', image : 'http://www.healthybutter.org/wp-content/uploads/2014/09/Cute-Polar-Bear-polar-bears-35634913-1600-1067.jpg', rating: 4},
	{title: 'Mountain Icon Image', image : 'https://d13yacurqjgara.cloudfront.net/users/30932/screenshots/606990/mountain_icon2.png', rating: 1}
	 ];
	var factory = {};
	factory.getImages = function() {
		return images;
	}
	factory.changeRating = function(title,rate) {
		images.forEach(function(image) {
			if (image.title === title) {
				image.rating = rate;
			}
		})
		return rate;
	}
	return factory;
})