class NewsEditController {
    constructor(News) {
        this.News = News;
    }
    $onInit() {}
}

export const newsEdit = {
    templateUrl: './app/pages/newness/crud/newness.form.tpl.html',
    controller: NewsEditController
};