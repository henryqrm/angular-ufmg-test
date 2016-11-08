// http://150.164.80.212:9999

export class NewsService {
    constructor($http, API) {
        this.apiNews = () => {
            return `${API}/news?page=1&page_size=30`
        }
    }

    get() {
        return
        this.apiNews
    }
}