import React, {useState} from 'react'
import PostItems from './PostItems'
import { DUMMY_POSTS } from '../data'


const Posts = () => {
    const [posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
       {posts.length > 0 ? <div className='container posts_container'>
            {
                posts.map(({id, thumbnail, category, title, desc, authorID})=> 
                <PostItems key={id} PostID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
            }
        </div> : <h3 className='center'>No Posts Found</h3>}
    </section>
  )
}

export default Posts
