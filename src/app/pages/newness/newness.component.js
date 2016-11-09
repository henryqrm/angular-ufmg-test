class NewnessController {
  /** @ngInject */
  constructor($http, News) {
    this.News = News;
    this.size = 10;
    this.sectionCurrent = 2;
    this.page = 1;
    this.loading = false;
  }
  $onInit() {
    this.openPage(this.page);
  }

  next() {
    const next = this.page + 1;
    this.openPage(next);
  }

  openPage(page) {
    this.page = page;
    this.News.list(this.page, this.size).then(res => {
      this.newness = res.data.items;
      this.total = res.data.total;
      this.numberPages = this.total > this.size ? Math.ceil(this.total / this.size) : 1;
      if (this.page >= this.numberPages) {
        this.page = 1;
        this.sectionCurrent = 2;
      }
      this.pages = [];
      for (let i = 1; i < this.numberPages; ++i) {
        this.pages.push(i);
      }
      if (this.page > 1 && this.page < this.numberPages) {
        this.sectionCurrent = this.page;
      }
      this.loading = true;
    });
  }

  back() {
    const back = this.page - 1;
    this.openPage(back);
  }
}

export const newness = {
  templateUrl: 'app/pages/newness/newness.html',
  controller: NewnessController
};
