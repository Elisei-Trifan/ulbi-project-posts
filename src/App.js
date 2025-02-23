import React from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

function App() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      title: 'ss',
      body: 'jmgh',
    },
    {
      id: 2,
      title: 'ddd',
      body: 'tdrfb',
    },
    {
      id: 3,
      title: 'efe',
      body: 'dgrb',
    },
  ])

  const [filter, setFilter] = React.useState({ sort: '', query: '' })

  const sortedPosts = React.useMemo(() => {
    console.log('ЕСть фаза')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedPosts])

  function createPost(ppp) {
    setPosts([...posts, ppp])
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Постов нет</h1>
      )}
    </div>
  )
}

export default App
