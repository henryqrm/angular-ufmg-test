class NewsEditController {
    constructor(News, $stateParams, $state) {
        this.News = News;
        this.$state = $state;
        this.idNews = $stateParams.id;
        this.news = {};
    }
    $onInit() {
        this.title = 'Editar notícia';
        this.News.get(this.idNews)
            .then(res => {
                this.news.title = res.data.title;
                this.news.subtitle = res.data.subtitle;
                this.news.text = res.data.text;
                this.news.tags = '';
                for (var index = 0; index < res.data.tags.length; index++) {
                    if (index === (res.data.tags.length - 1)) {
                        this.news.tags += res.data.tags[index].name;
                    } else {
                        this.news.tags += res.data.tags[index].name + ',';
                    }
                }

            });
    }
    save(isValid) {
        if (isValid) {
            this.News.update(this.idNews, this.news)
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

export const newsEdit = {
    templateUrl: './app/pages/newness/pages/newness.form.tpl.html',
    controller: NewsEditController
};