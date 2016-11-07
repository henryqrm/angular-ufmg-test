export default routesLogin;

function routesLogin($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/acesso',
            template: '<login></login>'
        });
}