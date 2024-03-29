import './ArticleDetailPage.scss'
import ArticleService from "../../services/ArticleService.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Comment from '../../components/Comment/Comment.jsx';
import CommentCard from '../../components/Comment/CommentCard/CommentCard.jsx';
import NoPageFound from '../NoPageFound/NoPageFound.jsx';

export default function ArticleDetailPage() {

    const {articleId} = useParams()

    const [articleDetails, setArticleDetails] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [showLoader, setShowLoader] = useState(true)
    

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

    if (errorMessage === "Article not found"){
        return <NoPageFound/>
    }

    return (
        <>
        <section className='wrapper'>
            <article className="articleDetailsPage">
                {articleDetails && (
                    <>
                        <h2>{articleDetails.title}</h2>
                        <p>{articleDetails.content}</p>

                        <section className='comment-section'>
                    
                            <div className='comment-box'>
                                <h3>{articleDetails?.comments?.length} Comments  </h3>
                            
                                <Comment articleId={articleId} refereshArticlePage={fetchArticleDetails}/>    
                            </div>
                            
                            <div className='comments-list'>
                            
                                {articleDetails?.comments.map((comment)=>(
                                    <p>
                                        <CommentCard key={comment.id}  commentData={comment} />
                                    </p>
                                ))}
                            
                            </div>
                
                        </section>
                    </>
                    
                )}
                {showLoader && <p>Loading...</p>}
                {errorMessage && <p>{errorMessage}</p>}
                
            </article>
            
        </section>
       </>
    )
}