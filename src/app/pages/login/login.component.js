class LoginController {
    constructor() {
        // this.Auth = Auth;
    }

    show(form) {
        console.log(form);
    }

    // login(isValid) {
    //     if (isValid) {
    //         this.Auth.login({
    //                 email: this.email,
    //                 password: this.password
    //             })
    //             .then(data => {
    //                 console.log('logado com sucesso');
    //             })
    //             .catch(err => {
    //                 console.log('Erro qualquer do servidor');
    //             });
    //     }
    // }

}
export const loginComponent = {
    templateUrl: 'app/pages/login/login.html',
    controller: LoginController,
};