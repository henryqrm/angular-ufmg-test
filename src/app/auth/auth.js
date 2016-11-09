export class Auth {
  /** @ngInject */
  constructor(API, $location, $http, $q, $window, $state) {
    this.apiAuth = `${API}/authenticate`;
    this.apiUser = `${API}/account`;
    this.$location = $location;
    this.$http = $http;
    this.$q = $q;
    this.$window = $window;
    this.$state = $state;
    this.currentUser = {};
  }

  login(username, password) {
    const data = {
      username,
      password,
      grant_type: 'password', // eslint-disable-line camelcase
      client_id: 'cms' // eslint-disable-line camelcase
    };

    return this
      .$http({
        method: 'POST',
        url: this.apiAuth,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: obj => {
          const str = [];
          for (const p in obj) {
            if ({}.hasOwnProperty.call(obj, p)) {
              str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
            }
          }
          return str.join("&");
        },
        data
      })
      // return this.$http.post(this.apiAuth, {
      //         username: username,
      //         password: password,
      //         grant_type: 'password',
      //         client_id: 'cms'
      //     })
      .then(res => {
        this.$window.localStorage.setItem('token', res.data.access_token);
        this.getUser()
          .catch(() => this.logout());
      })
      .catch(err => {
        return this.$q.reject(err.data);
      });
  }
  getUser() {
    return this.$http.get(this.apiUser);
  }
  logout() {
    this.$window.localStorage.removeItem('token');
    this.$state.go('login');
  }
  isLoggedIn() {
    const defer = this.$q.defer();
    return this.getUser().then(res => {
      if (res.status === 200) {
        defer.resolve(true);
      } else {
        defer.reject(true);
      }
      return defer.promise;
    });
  }
}
