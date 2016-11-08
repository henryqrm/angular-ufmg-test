// http://150.164.80.212:9999/news?page=1&page_size=30

export class NewsService {
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
        return this.$http.post(news, this.apiNewsCreate);
    }
    edit(id, news) {
        return this.$http.put(news, this.apiNewsEdit(id));
    }
    get(id) {
        return this.$http.get(this.apiNewsGet(id));
    }

}