import angular from 'angular';

export const homeModule = 'home';

import {
  home
} from './home.component';

angular
  .module(homeModule, ['ui.router'])
  .component('home', home)
  .config($stateProvider => {
    $stateProvider
      .state('app.home', {
        url: '/',
        views: {
          content: {
            template: '<home></home>'
          }
        }
      });
  });
