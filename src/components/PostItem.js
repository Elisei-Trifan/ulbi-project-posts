import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = ({ post, number, remove }) => {
  return (
    <div className="post">
      <div>
        <strong>
          {number}. {post.title}
        </strong>
        <div> {post.body} </div>
      </div>
      <div>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}

export default PostItem
