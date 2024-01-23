class ArticleService {
    API_URL = import.meta.env.VITE_API_URL

    fetchAllArticleTeasers() {
        return fetch(`${this.API_URL}/articles`)
            .then(response => response.json());
    }

    fetchArticleDetails(articleId) {
        return fetch(`${this.API_URL}/articles/${articleId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Article not found')
                }
            }).catch(error =>{
                console.error("Error fetching article", error)
                throw error
            });
    }
}

export default new ArticleService();