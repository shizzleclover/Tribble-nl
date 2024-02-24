
import { Link } from 'react-router-dom'

import AuthorImage from '../assets/1.jpg'

export default function Author() {
  return (
        <Link to={'/posts/user/:id'} className='post-author'>
            <div className="post-author-image">
        <img src={AuthorImage} alt="" />
            </div>
            <div className="post-author-info">
                <h5>John  Doe</h5>
                <small>Just Now</small>
            </div>
        </Link>
  )
}
