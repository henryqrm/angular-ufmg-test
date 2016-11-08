class LoginController {
    constructor(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;
        this.err = false;
    }

    login(isValid) {
        if (isValid) {
            this.Auth.login(this.user.email, this.user.password)
                .then(data => {
                    this.$state.go('app.home');
                })
                .catch(err => {
                    if (err.status === 401) {
                        this.err = true;
                    }
                    console.log('err', err);
                });
        }
    }

}
// LoginController.$inject = ['auth'];
export const loginComponent = {
    templateUrl: 'app/pages/login/login.html',
    controller: LoginController,
};