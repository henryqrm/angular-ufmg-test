import angular from 'angular';

import {
    news
} from './news.component';

export const newsModule = 'news';

angular
    .module(newsModule, [])
    .component('news', news);