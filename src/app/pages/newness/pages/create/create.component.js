class NewsCreateController {
    constructor(News, $state) {
        this.News = News;
        this.$state = $state;
    }
    $onInit() {
        this.title = 'Criar notícia';
    }
    
    save(isValid) {
        if (isValid) {
            this.News.create(this.news)
                .then(res => {
                    this.$state.go('app.news');
                })
                .catch(err => {
                    this.err = true;
                    console.log('err', err);
                });
        }
    }
}

export const newsCreate = {
    templateUrl: './app/pages/newness/pages/newness.form.tpl.html',
    controller: NewsCreateController
};