class ArticleService {
    API_URL = import.meta.env.VITE_API_URL

    fetchAllArticleTeasers() {
        return fetch(`${this.API_URL}/articles`)
            .then(response => response.json());
    }

    fetchArticleDetails(articleId) {
        return fetch(`${this.API_URL}/articles/${articleId}`)
            .then(response => response.json());
    }
}

export default new ArticleService();