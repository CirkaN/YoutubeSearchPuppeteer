import {Search} from "./search";

export class YTSearch {
    constructor() {
        this.search = new Search()
    }

    singleSearch(query, timeout = 10000, delay = 80) {
        return this.search.singleSearch(query);
    }

    radio(query, timeout = 10000) {
        return this.search.radio(query);
    }

}