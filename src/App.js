import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './App.css';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';
import MyInput from './components/Ui/input/MyInput';

function App() {
  const [posts] = useState([
    { id: 1, title: 'JavaScript - is programming language', body: 'description' },
    { id: 2, title: 'JavaScript - is programming language', body: 'description' },
    { id: 3, title: 'JavaScript - is programming language', body: 'description' },
  ]);
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostList title="PostList" posts={posts} />
      <form action="submit">
        <MyInput type="text" placeholder="Title of post" />
        <MyInput type="text" placeholder="Description" />
        <MyButton>Create Post</MyButton>
      </form>
    </div>
  );
}

export default App;
