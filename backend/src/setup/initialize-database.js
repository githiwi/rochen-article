
import sqlite3 from 'sqlite3'
import articleData from './articles.js'
import DatabaseConfig from './DatabaseConfig.js'



const db = new sqlite3.Database(DatabaseConfig.database, (error) => {
    if (error) {
        return console.error(error.message)
    } else {
        setupDatabase()
    } 
})



function setupDatabase() {

    db.serialize(() => {

        createArticlesTable()
        createCommentsTable()

        insertArticles()

        fetchArticles()
    })

    db.close()
}



function fetchArticles() {
    const query = `
        SELECT * FROM articles
    `

    db.each(query, (err, row) => {
        console.log(row)
    })
}



function createArticlesTable() {
    const query = `
        CREATE TABLE articles (
            id INT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL
        )
    `

    db.run(query)
}



function createCommentsTable() {
    const query = `
        CREATE TABLE comments (
            id INT PRIMARY KEY,
            article_id INT NOT NULL,
            content TEXT NOT NULL,
            username TEXT NOT NULL,

            FOREIGN KEY(article_id) REFERENCES articles(id)
        )
    `

    db.run(query)
}



function insertArticles() {
    const stmt = db.prepare("INSERT INTO articles VALUES (?, ?, ?)")
    for (let k=0; k<articleData.length; k++) {
        const article = articleData[k]
        stmt.run(k, article.title, article.content)
    }
    stmt.finalize()
}
