export class NewsService {
  /** @ngInject */
  constructor($http, API) {
    this.$http = $http;
    this.apiNews = (page, size) => {
      return `${API}/news?page=${page}&page_size=${size}`;
    };
    this.apiNewsCreate = `${API}/news`;
    this.apiNewsEdit = id => `${API}/news/${id}`;
    this.apiNewsGet = id => `${API}/news/${id}`;
  }

  list(page, size) {
    if (page === undefined) {
      page = 1;
    }
    if (size === undefined) {
      size = 10;
    }

    return this.$http.get(this.apiNews(page, size));
  }

  create(news) {
    return this.$http({
      method: 'POST',
      url: this.apiNewsCreate,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: obj => {
        const str = [];
        for (const p in obj) {
          if ({}.hasOwnProperty.call(obj, p)) {
            str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
          }
        }
        return str.join("&");
      },
      data: news
    });
    // return this.$http.post(this.apiNewsCreate, news);
  }

  update(id, news) {
    return this.$http.put(this.apiNewsEdit(id), news);
  }

  get(id) {
    return this.$http.get(this.apiNewsGet(id));
  }
}
