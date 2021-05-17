import React from 'react'
import Post from './Post'
const Posts = ({ posts, title }) => {
  return (
    <>
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/* posts column */}
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>

      </div>
    </>
  )
}

export default Posts
