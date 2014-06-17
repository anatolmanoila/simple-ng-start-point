angular.module("directivesApp", [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/main.client.view.html',
        controller: 'MainController'
      });
    $urlRouterProvider.otherwise('/');
  });
