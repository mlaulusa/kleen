angular.module('kleen', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    });

  }
])

.controller('MainCtrl', [function() {

}]);
