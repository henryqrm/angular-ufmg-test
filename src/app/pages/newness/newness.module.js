import angular from 'angular';

import {
  newness
} from './newness.component';

import {
  NewsService
} from './newness.service';

import {
  newsCreate
} from './pages/create/create.component';
import {
  newsEdit
} from './pages/edit/edit.component';

import {
  newsModule
} from './../../components/news/news.module';

export const newnessModule = 'newness';

angular
  .module(newnessModule, ['ui.router', newsModule])
  .component('newness', newness)
  .component('create', newsCreate)
  .component('edit', newsEdit)
  .service('News', NewsService)
  .config($stateProvider => {
    $stateProvider
      .state('app.news', {
        url: '/news',
        views: {
          content: {
            template: '<newness></newness>'
          }
        }
      })
      .state('app.newsEdit', {
        url: '/news/edit/:id',
        views: {
          content: {
            template: '<edit></edit>'
          }
        }
      })
      .state('app.newsCreate', {
        url: '/news/create',
        views: {
          content: {
            template: '<create></create>'
          }
        }
      });
  });
