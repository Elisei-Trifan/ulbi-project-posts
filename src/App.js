import React from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

function App() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      title: 'Javascript',
      description: 'Javascript - это язык программирования',
    },
    {
      id: 2,
      title: 'Javascript',
      description: 'Javascript - это язык программирования',
    },
    {
      id: 3,
      title: 'Javascript',
      description: 'Javascript - это язык программирования',
    },
  ])

  function createPost(ppp) {
    setPosts([...posts, ppp])
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id))
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length > 0 ? (
        <PostList remove={removePost} posts={posts} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Постов нет</h1>
      )}
    </div>
  )
}

export default App
