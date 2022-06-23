import React from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './App.css';
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostItem post={{ id: 1, title: 'JavaScript - is programming language', body: 'description' }} />
    </div>
  );
}

export default App;
