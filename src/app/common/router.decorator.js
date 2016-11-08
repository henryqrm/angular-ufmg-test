export default routesAuth;

function routesAuth($rootScope, $state, Auth) {
    // Redirecionamento
    $rootScope.$on('$stateChangeStart', function(event, next) {
        if (next.name === 'login')
            return;
        return Auth.isLoggedIn()
            .catch(err => {
                event.preventDefault();
                return $state.go('login');
            })
    });
}