angular.module('taller').config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/web');
  $stateProvider
    .state('app', {
      url: '/cabecera',
      views: {
        'main@': {
          template: 'app/core/layout/main/default.html'
        }
      }
    })
    .state('app', {
      url: '/menu',
      views: {
        'main@': {
          template: 'login'
        }
      }
    })


}
