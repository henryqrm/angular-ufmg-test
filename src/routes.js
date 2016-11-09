export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  'ngInject';
  $locationProvider.html5Mode(true).hashPrefix('!');
  $httpProvider.interceptors.push('AuthInterception');

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<app></app>'
    });
}
