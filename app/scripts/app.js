angular.module("myApp", [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/index.tpl.html',
        controller: function($scope) {
          $scope.updateMessageText = function(text) {
            $scope.messageText = text;
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
