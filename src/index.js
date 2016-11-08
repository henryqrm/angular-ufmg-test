import angular from 'angular';

import {techsModule} from './app/techs/index';
import {LoginModule} from './app/pages/login/login.module';


//Authentication

import {Auth} from './app/common/auth';
import {AuthInterception} from './app/common/interception';
import {User} from './app/common/user';
import routesAuth from './app/common/router.decorator';


import 'angular-ui-router';
import 'angular-loading-bar';
import 'angular-animate';
import routesConfig from './routes';

import {main} from './app/template/main';
import {header} from './app/template/header';
import {title} from './app/template/title';
import {footer} from './app/template/footer';
import {nav} from './app/template/nav';

import './index.scss';

angular
  .module('app', [
    techsModule,
    LoginModule,
    'ui.router',
    'angular-loading-bar',
    'ngAnimate'
    ])
  .config(routesConfig)
  .run(routesAuth)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainNav', nav)
  .component('fountainFooter', footer)
  .service('Auth', Auth)
  .service('AuthInterception', AuthInterception)
  .service('User', User)
  .constant('API', 'http://150.164.80.212:9999');
