// http://150.164.80.212:9999/news?page=1&page_size=30

export class NewsService {
    constructor($http, API) {
        this.$http = $http;
        this.apiNews = (page, size) => {
            return `${API}/news?page=${page}&page_size=${size}`;
        };
    }

    get(page, size) {
        if (!page || !size) {
            page = 1;
            size = 15;
        }
        return this.$http.get(this.apiNews(page, size));
    }
}