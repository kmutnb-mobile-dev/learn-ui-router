angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/state1",
        templateUrl: "partials/home.html"
      })
      .state('product', {
        url: "/product",
        templateUrl: "partials/product.html",
        controller: function($scope) {
          $scope.products = ["A", "Set", "Of", "Things"];
        }
      })
      .state('product.car', {
        url: "/car",
        templateUrl: "partials/product.car.html",
        controller: function($scope) {
          $scope.cars = ["Mazda", "Honda", "Toyota", "Kubuta"];
        }
      })
      .state('product.plane', {
        url: "/plane",
        templateUrl: "partials/product.plane.html",
        controller: function($scope) {
          $scope.planes = ["F16", "Boing", "Backhock", "Kubuta"];
        }
      });
  })
  .controller('TodoController', ['$scope',
    function($scope) {

    }
  ]);