import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './App.css';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';
import MyInput from './components/Ui/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript - is programming language', body: 'description' },
    { id: 2, title: 'JavaScript - is programming language', body: 'description' },
    { id: 3, title: 'JavaScript - is programming language', body: 'description' },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);

    setPost({ title: '', body: '' });
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostList title="PostList" posts={posts} />
      <form action="submit">
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Title of post"
        />
        {/* Неуправляемый, неконтролируемый компонент */}
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
    </div>
  );
}

export default App;
