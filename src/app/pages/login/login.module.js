import angular from 'angular';

import {
  loginComponent
} from './login.component';

export const loginModule = 'login-module';

angular
  .module(loginModule, [])
  .component('login', loginComponent)
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('login', {
        url: '/acesso',
        template: '<login></login>'
      });
  }]);
