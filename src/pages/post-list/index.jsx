import React from 'react'
import { NavLink } from 'react-router-dom'
import { posts } from '../../data/posts'

export default function PostList() {
    return (
        <div className="d-flex flex-column" >
            {posts.map(post =>(
                <NavLink  key={post.id} to={`/${post.id}`} className="" style={{cursor:"pointer"}}>
                    {post.text}
                </NavLink>
            ))}
        </div>
    )
}
