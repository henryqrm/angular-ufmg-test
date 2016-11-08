import angular from 'angular';

import {
    newness
} from './newness.component';

import {
    NewsService
} from './newness.service';

import {
    newsModule
} from './../../components/news/news.module';

export const newnessModule = 'newness';

angular
    .module(newnessModule, ['ui.router', newsModule])
    .component('newness', newness)
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
            });
    });