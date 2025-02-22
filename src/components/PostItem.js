import React from 'react'

const PostItem = ({ post, number }) => {
  return (
    <div className="post">
      <div>
        <strong>
          {number}. {post.title}
        </strong>
        <div> {post.body} </div>
      </div>
      <div>
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem
