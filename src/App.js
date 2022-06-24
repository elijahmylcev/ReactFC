import React, { useRef, useState } from 'react';
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

  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostList title="PostList" posts={posts} />
      <form action="submit">
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title of post"
        />
        {/* Неуправляемый, неконтролируемый компонент */}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
    </div>
  );
}

export default App;
