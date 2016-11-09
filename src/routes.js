export default routesConfig;

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $httpProvider.interceptors.push('AuthInterception');

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      // url: '/',
      abstract: true,
      template: '<app></app>'
    });
}
