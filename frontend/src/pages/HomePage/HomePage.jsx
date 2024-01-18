import './HomePage.scss'
import {useEffect, useState} from "react";
import ArticleService from "../../services/ArticleService.js";
import ArticleTeaser from "../../components/ArticleTeaser/ArticleTeaser.jsx";

export default function HomePage() {

    const [articleTeasers, setArticleTeasers] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        fetchArticleTeasers()
    }, []);

    async function fetchArticleTeasers() {
        try {
            const articleTeasers = await ArticleService.fetchAllArticleTeasers()
            setArticleTeasers(articleTeasers)
            setErrorMessage(null)
        } catch (error) {
            setArticleTeasers(null)
            setErrorMessage(error.message)
        }

        setShowLoader(false)
    }

    return (
        <article className="homePage">
            <h2>home</h2>
            {articleTeasers && articleTeasers.map((teaser, index) => (
                <ArticleTeaser
                    key={teaser.id}
                    id={teaser.id}
                    title={teaser.title}
                    index={index}
                />
            ))}
            {showLoader && <p>Loading...</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </article>
    )
}