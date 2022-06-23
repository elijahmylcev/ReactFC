import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './App.css';
import PostList from './components/PostList';

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
    </div>
  );
}

export default App;
