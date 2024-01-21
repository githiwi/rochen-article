import DatabaseConnection from './DatabaseConnection.js'

class ArticleRepository {

    async getArticleTeasers() {

        const database = DatabaseConnection.getDatabase()
        const result = await database.all('SELECT id, title FROM articles')

        const articles = result.map(row => ({
            id: row.id,
            title: row.title
        }))

        return articles
    }

    async getArticleById(id) {

        const database = DatabaseConnection.getDatabase()
        const fetchedArticle = await database.get('SELECT * FROM articles WHERE id = ?', [id])
        const articleComments = await database.all('SELECT * FROM comments WHERE article_id = ?', [id])

        if(fetchedArticle) {
            const comments = articleComments.map(row => ({
                id: row.id,
                content: row.content,
                username: row.username
            }))

            const article = {
                id: fetchedArticle.id,
                title: fetchedArticle.title,
                content: fetchedArticle.content,
                comments: comments
            }

            return article

        } else {
            return null
        }
    }
}

export default new ArticleRepository()
