// 
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
        <div className="container footer-container">
        <ul className='footer-categories'> 
        <li><Link to={'/posts/categories/Education'}>Education</Link></li>
        <li><Link to={'/posts/categories/Discovery'}>Discovery</Link></li>
        <li><Link to={'/posts/categories/Events'}>Events</Link></li> 
        <li><Link to={'/posts/categories/Entertainment'}>Entertainment</Link></li>
        <li><Link to={'/posts/categories/Art'}>Art</Link></li>
        <li><Link to={'/posts/categories/Business'}>Business</Link></li>
        <li><Link to={'/posts/categories/Investments'}>Investments</Link></li>
        <li><Link to={'/posts/categories/Fashion'}>Fashion</Link></li>
        <li><Link to={'/posts/categories/Sports'}>Sports</Link></li>
        <li><Link to={'/posts/categories/Health'}>Health</Link></li>
        </ul>

        <div className="footer-copyright">
            <small> &copy; Copyrights All Rights Reserved ||Tribble </small>
        </div>
        </div>
    </footer>
  )
}
