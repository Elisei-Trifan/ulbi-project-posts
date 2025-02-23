import React from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

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

  const [selectedSort, setSelectedSort] = React.useState('')

  function createPost(ppp) {
    setPosts([...posts, ppp])
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id))
  }

  function sortPosts(sort) {
    setSelectedSort(sort)
    console.log(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        value={selectedSort}
        selected={sortPosts}
        defaultValue="Сортировка"
        options={[
          {
            value: 'title',
            name: 'По названию',
          },
          {
            value: 'body',
            name: 'По описанию',
          },
        ]}
      />
      {posts.length > 0 ? (
        <PostList remove={removePost} posts={posts} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Постов нет</h1>
      )}
    </div>
  )
}

export default App
