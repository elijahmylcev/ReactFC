import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './App.css';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';
import MyInput from './components/Ui/input/MyInput';
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

  return (
    <div className="App">
      {/* <Counter />
      <ClassCounter /> */}
      <PostForm create={createPost} />

      <PostList title="PostList" posts={posts} />
    </div>
  );
}

export default App;
