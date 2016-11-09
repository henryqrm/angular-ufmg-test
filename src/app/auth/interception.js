export class AuthInterception {
  constructor($rootScope, $q, $injector, $window) {
    let state;
    return {
      request(config) {
        config.headers = config.headers || {};

        if ($window.localStorage.getItem('token')) {
          config.headers.Authorization = `Bearer ${$window.localStorage.getItem('token')}`;
        }
        return config;
      },

      responseError(response) {
        if (response.status === 401) {
          (state || (state = $injector.get('$state')))
          .go('login');
          $window.localStorage.removeItem('token');
        }
        return $q.reject(response);
      }
    };
  }
}