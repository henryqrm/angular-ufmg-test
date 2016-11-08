import angular from 'angular';

import routesLogin from './login.router';

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
    .config(routesLogin);