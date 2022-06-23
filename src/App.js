import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './App.css';
import PostItem from './components/PostItem';

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
      <h1>Posts list</h1>
      {posts.map((post) => <PostItem post={post} key={post.id} />)}
    </div>
  );
}

export default App;
