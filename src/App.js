import React from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'

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
  const [modal, setModal] = React.useState(false)

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
    setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} />
    </div>
  )
}

export default App
