import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Список постов </h1>
      {posts.map((item, ind) => (
        <PostItem key={item.id} number={ind + 1} post={item} />
      ))}
    </div>
  )
}

export default PostList
