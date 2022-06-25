import React, { useState } from 'react';

import MyButton from './Ui/button/MyButton';
import MyInput from './Ui/input/MyInput';

function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '' });
  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);

    setPost({ title: '', body: '' });
  };

  return (
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
  );
}

export default PostForm;
