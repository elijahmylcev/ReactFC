import React, { useState } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript - is programming language', body: 'description' },
    { id: 2, title: 'JavaScript - is programming language', body: 'description' },
    { id: 3, title: 'JavaScript - is programming language', body: 'description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      {/* <Counter />
      <ClassCounter /> */}
      <PostForm create={createPost} />
      {posts.length !== 0
        ? <PostList remove={removePost} title="PostList" posts={posts} />
        : <h1>Posts not found</h1>}

    </div>
  );
}

export default App;
