class CommentService {
    API_URL = import.meta.env.VITE_API_URL

    async createArticleComment (commentData) {
        try {
            const response = await fetch(`${this.API_URL}/articles/comment`, {
              method: "POST", 
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(commentData),
            });
        
            const result = await response.json();
            console.log("Success:", result);
          } catch (error) {
            console.error("Error creating comment:", error);
          }
    }
}

export default new CommentService()