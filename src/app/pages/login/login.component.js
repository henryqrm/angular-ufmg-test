class LoginController {
    constructor(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;
        this.err = false;
    }

    login(isValid) {
        if (isValid) {
            this.Auth.login(this.user.email, this.user.password)
                .then(() => {
                    this.$state.go('app.home');
                })
                .catch(err => {
                    this.err = true;
                    console.log('err', err);
                });
        }
    }

}
export const loginComponent = {
    templateUrl: 'app/pages/login/login.html',
    controller: LoginController,
};