{
  angular.module('app', ['ui.router','ngResource','app.search'])
    .config(configFunc)
    .run(runFunc);

  configFunc.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/search/');
  }

  runFunc.$inject = ['$rootScope','$state'];
  function runFunc($rootScope,$state) {
    $rootScope.$on('$stateChangeSuccess', () => {
      $rootScope.$state = $state;
    });
  }
}
