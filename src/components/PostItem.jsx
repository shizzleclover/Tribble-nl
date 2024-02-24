import { Link } from "react-router-dom"
// import Posts from "./Posts"
import PostAuthor from "./PostAuthor"

export default function PostItem({Image, authorId, category, title, des, postId}) {

const shorTitle = title.length > 60 ? title.substr(0, 60) + '...' : title

  return (
    <article className="post">
        <div className="post-image">
            <img src={Image} alt="" />
        </div>
        <div className="post-content">
            <Link to={'posts/${postId'}>
                <h3>{title}</h3>
            </Link>
            <p>{des}</p>
             <div className="post-footer">
                <Author />
                <Link to={'/posts/categories/${category}'} className="btn btn-category">{category}</Link>
             </div>
        </div>
    </article>
  )
}
