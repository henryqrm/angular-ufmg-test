export class AuthInterception {
    constructor($rootScope, $q, $injector, $window) {
        var state;
        return {
            request(config) {
                config.headers = config.headers || {};

                if ($window.localStorage.getItem('token')) {
                    // if ($cookies.get('token')) {
                    // config.headers.Authorization = 'Bearer ' + $cookies.get('token');
                    config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
                }
                return config;
            },

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