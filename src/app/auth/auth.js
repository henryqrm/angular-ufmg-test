export class Auth {
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
        return this.$http({
                method: 'POST',
                url: this.apiAuth,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {
                    username: username,
                    password: password,
                    grant_type: 'password',
                    client_id: 'cms'
                }
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
                    .catch(err => {
                        this.logout();
                    });
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
        var defer = this.$q.defer();
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