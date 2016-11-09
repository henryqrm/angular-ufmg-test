export default routesAuth;

/** @ngInject */
function routesAuth($rootScope, $state, Auth) {
  'ngInject';
  $rootScope.$on('$stateChangeStart', (event, next) => {
    if (next.name === 'login') {
      return;
    }
    return Auth.isLoggedIn()
      .catch(() => {
        event.preventDefault();
        return $state.go('login');
      });
  });
}
