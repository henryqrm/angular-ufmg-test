import angular from 'angular';

import {
    loginComponent
} from './login.component';

// import {AuthModule} from './../../components/auth/auth.module';

export const LoginModule = 'login';

angular
    .module(LoginModule, [
        'ui.router'
    ])
    .component('login', loginComponent)
    .config($stateProvider => {
        $stateProvider
            .state('login', {
                url: '/acesso',
                template: '<login></login>'
            });
    });