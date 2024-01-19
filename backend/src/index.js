import express, { json, request, response } from 'express'
import cors from 'cors'
import DatabaseConnection from './DatabaseConnection.js'
import ArticleRepository from './articleRepository.js'
import CommentRepository from './commentRepository.js'


(async () => {


    await DatabaseConnection.connect()


    const app = express()
    const port = 8000

    app.use(cors())
    app.use(express.json())


    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`)
    })


    app.get('/articles', async (request, response) => {
        const articleTeasers = await ArticleRepository.getArticleTeasers()

        response.json(articleTeasers)
    })


    app.get('/articles/:id', async (request, response) => {
        const id = request.params.id
        const article = await ArticleRepository.getArticleById(id)

        if(article) {
            response.json(article) 
        } else {
            response.sendStatus(404)
        }

    })

    app.post('/articles/comment', async (request,response)=> {
        const commentData =  request.body
        
        const comment = await CommentRepository.createCommentArticle(commentData)
        
        if (comment) {
            response.json("comment created succefully")
        } else {
            response.sendStatus(400)
        }
    })

})()

