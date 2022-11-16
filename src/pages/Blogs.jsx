import React, { useContext } from 'react'
import useBlogs from '../hook/useBlog'

export default function Blogs() {
    // const { post } = useContext(BlogContext)

    const { post } = useBlogs()

    return (
        <div>
            <h1>Blog</h1>
            {post.map((e) => (
                <div key={e.id}>
                    <h1>{e.title}</h1>
                    <h4>{e.body}</h4>
                </div>
            ))}
        </div>
    )
}
