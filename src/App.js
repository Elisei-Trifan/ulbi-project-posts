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

  const [post, setPost] = React.useState({ title: '', body: '' })

  function addNewPost(e) {
    e.preventDefault()

    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <PostForm posts={posts} setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  )
}

export default App
