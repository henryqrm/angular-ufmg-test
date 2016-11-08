class NewnessController {
    constructor($http, News) {
        this.News = News;
        this.page = 1;
        this.size = 12;
        this.total = 0;
    }
    $onInit() {
        this.News.get(this.page, this.size).then(res => {
            console.log(res);
            this.newness = res.data.items;
            this.total = res.data.total;
        });
    }
}

export const newness = {
    templateUrl: 'app/pages/newness/newness.html',
    controller: NewnessController
};