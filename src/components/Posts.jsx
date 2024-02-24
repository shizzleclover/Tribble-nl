//dummy-post-data
import { DummyPosts } from "../data/data"

//
import { useState } from "react"

//component
import PostItem from "./PostItem"

export default function Posts() {
    const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className="posts">
       <div className="container posts-container">
       {
posts.map(({id,Image, authorId, category, title, des}, index)=>
 <PostItem key={index} Image={Image} category={category} authorId=
 {authorId} title={title} des={des}  postId={id} />)
        }
       </div>
    </section>
  )
}
