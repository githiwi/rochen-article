import './ArticleDetailPage.scss'
import ArticleService from "../../services/ArticleService.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Comment from '../../components/Comment/Comment.jsx';

export default function ArticleDetailPage() {

    const [articleDetails, setArticleDetails] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [showLoader, setShowLoader] = useState(true)

    const {articleId} = useParams()

    useEffect(() => {
        fetchArticleDetails()
    }, []);

    async function fetchArticleDetails() {
        try {
            const articleDetails = await ArticleService.fetchArticleDetails(articleId)
            setArticleDetails(articleDetails)
            setErrorMessage(null)
        } catch (error) {
            setArticleDetails(null)
            setErrorMessage(error.message)
        }

        setShowLoader(false)
    }

    return (
        <>
        <article className="articleDetailsPage">
            {articleDetails && (
                <>
                    <h2>{articleDetails.title}</h2>
                    <p>{articleDetails.content}</p>
                </>
            )}
            {showLoader && <p>Loading...</p>}
            {errorMessage && <p>{errorMessage}</p>}
            
        </article>

        <Comment articleId={articleId}/>
       </>
    )
}