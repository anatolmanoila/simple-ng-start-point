angular.module("directivesApp", [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/alert.client.view.html',
        controller: 'AlertController'
      });
    $urlRouterProvider.otherwise('/');
  });
