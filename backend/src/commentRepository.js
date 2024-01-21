import DatabaseConnection from "./DatabaseConnection.js";

class CommentRepository {

    /**
     * Insert comment into the database
     * 
     * @param {*} commentData 
     * @returns 
     */
    async createCommentArticle(commentData) {
        const dbConnection = DatabaseConnection.getDatabase()

        const allComments = await dbConnection.all('SELECT * FROM comments')

        var commentId;
        if(allComments.length === 0) {
            commentId = 0;
        } else {
            //next id will be assigned with all comment length
            commentId = allComments.length
        }

        const query = 'INSERT INTO comments (id, article_id, content) VALUES(?, ?, ?)'
        const values = [commentId, commentData.articleId, commentData.comment]
        
        try {
            const result = await dbConnection.run(query, values)
            return result
        } catch (error) {
            console.error("Error inserting comment:", error);
            throw error;
        }
    }

}

export default new CommentRepository()