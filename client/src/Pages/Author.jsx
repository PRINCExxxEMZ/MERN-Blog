import React, { useState } from 'react'

import avater1 from '../Image/avater.jpg'
import avater2 from '../Image/Avater-2.jpg'
import avater3 from '../Image/avater-3.png'
import { Link } from 'react-router-dom'

const authorsData = [
    {id: 1, avater: avater1, name:'Dark Prince', posts: 5},
    {id: 2, avater: avater2, name:'Ark', posts: 1},
    {id: 3, avater: avater3, name:'Doc', posts: 2},
]

const Author = () => {
    const [authors, setAuthors] = useState(authorsData)
  return (
        <section className='authors'>
            {authors.length > 0 ? <div className='container authors_container'>
                {
                    authors.map(({id, avater, name, posts}) => {
                        return <Link key={id}to ={`/posts/users/${id}`} className='author'>
                            <div className='author_avater'>
                                <img src={avater} alt={`image of ${name}`} />
                            </div>
                            <div className='author_info'>
                                <h4>{name}</h4>
                                <p>{posts}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2 className='center'>No Authors Found</h2>}
        </section>
    
  )
}

export default Author
