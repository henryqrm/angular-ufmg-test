import angular from 'angular';

export const homeModule = 'home-module';

import {
  home
} from './home.component';

angular
  .module(homeModule, ['ui.router'])
  .component('home', home)
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('app.home', {
        url: '/dashboard',
        views: {
          content: {
            template: '<home></home>'
          }
        }
      });
  }]);
