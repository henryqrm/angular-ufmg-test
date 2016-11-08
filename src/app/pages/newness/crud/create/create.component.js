class NewsCreateController {
    constructor(News) {
        this.News = News;
    }
    $onInit() {}
    create() {
        // {
        //     title: '',
        //     subtitle: '',
        //     text: '',
        //     tags: ''
        // }
    }
}

export const newsCreate = {
    templateUrl: './app/pages/newness/crud/newness.form.tpl.html',
    controller: NewsCreateController
};