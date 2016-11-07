import angular from 'angular';

import {techsModule} from './app/techs/index';
import {LoginModule} from './app/pages/login/login.module';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/template/main';
import {header} from './app/template/header';
import {title} from './app/template/title';
import {footer} from './app/template/footer';
import {nav} from './app/template/nav';

import './index.scss';

angular
  .module('app', [techsModule, LoginModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainNav', nav)
  .component('fountainFooter', footer);
