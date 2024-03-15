import React from 'react'
import { Link } from 'react-router-dom'
import Avater from '../Image/avater.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/10`} className='post_author'>
        <div className='post_author-avater'>
            <img src={Avater} alt="" />
        </div>

        <div className='post_author-details'>
            <h5>By: Domi</h5>
            <small>just now</small>
        </div>
    </Link>
  )
}

export default PostAuthor
