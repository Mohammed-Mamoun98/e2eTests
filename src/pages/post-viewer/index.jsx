import React from 'react'
import { useParams } from 'react-router-dom'
import { findPost } from '../../data/posts'

export default function PostViewer() {
    const {postId} = useParams()
    return (
        <div id="post-viewer">
            {findPost(postId).text}
        </div>
    )
}
