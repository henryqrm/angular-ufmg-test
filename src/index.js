import angular from 'angular';

import {
  newnessModule
} from './app/pages/newness/newness.module';
import {
  loginModule
} from './app/pages/login/login.module';
import {
  homeModule
} from './app/pages/home/home.module';

import {
  Auth
} from './app/auth/auth';
import {
  AuthInterception
} from './app/auth/interception';
import routesAuth from './app/auth/router.decorator';

import 'angular-ui-router';
import routesConfig from './routes';

import {
  main
} from './app/template/main';
import {
  header
} from './app/template/header';
import {
  footer
} from './app/template/footer';
import {
  nav
} from './app/template/nav';

import './index.scss';

angular
  .module('app', [
    newnessModule,
    loginModule,
    homeModule,
    'ui.router'
  ])
  .config(routesConfig)
  .run(routesAuth)
  .component('app', main)
  .component('hHeader', header)
  .component('hNav', nav)
  .component('hFooter', footer)
  .service('Auth', Auth)
  .service('AuthInterception', AuthInterception)
  .constant('API', 'http://150.164.80.212:9999');
