import './ArticleTeaser.scss'
import {Link} from "react-router-dom";

export default function ArticleTeaser({id, title, index}) {

    return (
        <section className="articleTeaser">
            <h3>{index+1}. <Link to={`/article/${id}`}>{title}</Link></h3>
        </section>
    )
}