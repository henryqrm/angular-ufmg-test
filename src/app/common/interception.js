export class AuthInterception {
    constructor($rootScope, $q, $injector, $window) {
        var state;
        return {
            // Add authorization token to headers
            request(config) {
                config.headers = config.headers || {};
                if ($window.localStorage.getItem('token')) {
                    // if ($cookies.get('token')) {
                    // config.headers.Authorization = 'Bearer ' + $cookies.get('token');
                    config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
                }
                return config;
            },

            // Intercept 401s and redirect you to login
            responseError(response) {
                if (response.status === 401) {
                    (state || (state = $injector.get('$state')))
                    .go('login');
                    // $cookies.remove('token');
                    $window.localStorage.removeItem('token');
                }
                return $q.reject(response);
            }
        };
    }
}