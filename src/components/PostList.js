import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Постов нет</h1>
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Список постов </h1>
      {posts.map((item, ind) => (
        <PostItem remove={remove} key={item.id} number={ind + 1} post={item} />
      ))}
    </div>
  )
}

export default PostList
