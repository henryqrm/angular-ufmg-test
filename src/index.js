import angular from 'angular';

import {newnessModule} from './app/pages/newness/newness.module';
import {LoginModule} from './app/pages/login/login.module';
import {homeModule} from './app/pages/home/home.module';


import {Auth} from './app/common/auth';
import {AuthInterception} from './app/common/interception';
import routesAuth from './app/common/router.decorator';


import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/template/main';
import {header} from './app/template/header';
import {footer} from './app/template/footer';
import {nav} from './app/template/nav';

import './index.scss';

angular
  .module('app', [
    newnessModule,
    LoginModule,
    homeModule,
    'ui.router'
    ])
  .config(routesConfig)
  .run(routesAuth)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainNav', nav)
  .component('fountainFooter', footer)
  .service('Auth', Auth)
  .service('AuthInterception', AuthInterception)
  .constant('API', 'http://150.164.80.212:9999');
