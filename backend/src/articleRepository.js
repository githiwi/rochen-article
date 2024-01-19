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
        const result = await database.get('SELECT * FROM articles WHERE id = ?', [id])

        if(result) {

            const article = {
                id: result.id,
                title: result.title,
                content: result.content,
                comments:result.comments
            }
    
            return article

        } else {
            return null
        }
    }
}

export default new ArticleRepository()
