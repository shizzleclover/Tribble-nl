//
import { BrowserRouter, Route,Routes  } from "react-router-dom"

//
import Header from "../components/Header"
import Footer from "../components/Footer"

//
import Home from '../pages/Home'
import Author from '../pages/Author'
import Post from '../pages/Post'
import Category from '../pages/Category'
import CreatePosts from '../pages/CreatePosts'
import Dashboard from '../pages/Dashboard'
import DeletePost from '../pages/DeletePost'
import EditPosts from '../pages/EditPosts'
import ErrorPage from '../pages/ErrorPage'
import Loginpage from '../pages/Loginpage'
import Logout from '../pages/Logout'
import PostDtail from '../pages/PostDtail'
import Registar from '../pages/Registar'
import UserProfile from '../pages/UserProfile'



export default function Router() {
  return (
    <>
   <BrowserRouter >
      <Header />
         <Routes> 
             <Route path="/" element={<Home />} />
             <Route path="/author" element={<Author />} />
             <Route path="/posts/user/:id" element={<Post />} />
             <Route path="/posts/categories/:category" element={<Category />} />
             <Route path="/create" element={<CreatePosts />} />
             <Route path="/myposts/:id" element={<Dashboard />} />
             {/* <Route path="/" element={<DeletePost />} /> */}
             <Route path="/post/:id/edit" element={<EditPosts />} />
             <Route path="/login" element={<Loginpage />} />
             <Route path="/logout" element={<Logout />} />
             <Route path="/posts/:id" element={<PostDtail />} />
             <Route path="/registar" element={<Registar />} />
             <Route path="/profile/:id" element={<UserProfile />} />
             <Route path="*" element={<ErrorPage />} />
         </Routes>
     <Footer />
   </BrowserRouter>
    </>
  )
}
