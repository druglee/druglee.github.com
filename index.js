angular.module('PortletTester', [])
	.controller('SlideCtrl', function($scope) {

		var slides = [{
			title: 'Focuses on portlet unit testing',
			content: 'We focus on portlet unit testing for now. But who knows whehter we will have another project in the future.',
			imageUrl : 'images/unit_test.png'
		}, {
			title: 'Easy to configure',
			content: 'Simply add the dependency in your POM.xml file',
			imageUrl : 'images/pom.png'
		}, {
			title: 'Compatible with JUnit and TestNG',
			content: 'Using either one is up to you. You are using something else? No problem.',
			imageUrl: 'images/compatible.png'
		}];

		$scope.viewModel = {
			slides: slides,
			currentSlideIndex: 0
		}

		$scope.switchSlide = function(index) {
			$scope.viewModel.currentSlideIndex = index;
		}

		$scope.isActive = function (index) {
			return $scope.viewModel.currentSlideIndex == index;
		};
	});