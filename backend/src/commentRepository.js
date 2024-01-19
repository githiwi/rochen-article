import DatabaseConnection from "./DatabaseConnection.js";

class CommentRepository {

    /**
     * 
     * @param {*} commentData 
     * @returns 
     */
    async createCommentArticle(commentData) {
        const dbConnection = DatabaseConnection.getDatabase()
        console.log("check check",commentData)

        // TODO move to its own fucnttion 
        const allComments = await dbConnection.all('SELECT * FROM comments')
        console.log("all commet",allComments.length)

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

    /**
     * Determine the id of comment should be
     * @returns 
     */
    async getNextCommentId() {

        try {
            const allComments = await dbConnection.all('SELECT * FROM comments')
            console.log("all commet",allComments.length)

            var commentId;
            if(allComments.length === 0) {
                commentId = 0;
            } else {
                commentId = allComments
            }
            return commentId
        } catch (error) {
            console.error("Error creating next comment id!", error)
        }
        
        
    }

    async getCommentbyArticle() {

        const database = DatabaseConnection.getDatabase()
        const result = await database.get('SELECT * FROM comments')

        if(result){
            const aricleComments = result.map(row =>({
                id: row.id,
                article_id: row.article_id,
                content: row.comment
            }))
            return aricleComments
        }else{
            return null
        }
        
    }

}

export default new CommentRepository()