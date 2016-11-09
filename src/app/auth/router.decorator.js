export default routesAuth;

function routesAuth($rootScope, $state, Auth) {
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
