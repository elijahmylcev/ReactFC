import React, { useState } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/Ui/Select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript - is programming language', body: 'JavaScript – один из самых популярных языков программирования в мире. Он используется для создания интерактивных веб-страниц, мобильных приложений...' },
    { id: 2, title: 'Python - is programming language', body: 'Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ. Язык является полностью объектно-ориентированным в том плане, что всё является объектами. ' },
    { id: 3, title: 'Assembler - is programming language', body: 'Языsк ассемблера — машинно-ориентированный язык программирования низкого уровня. Представляет собой систему обозначений, используемую для представления в удобно читаемой форме программ, записанных в машинном коде. Его команды прямо соответствуют отдельным командам машины или их последовательностям.' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log(sort);
  };

  return (
    <div className="App">
      {/* <Counter />
      <ClassCounter /> */}
      <PostForm create={createPost} />
      <hr style={{ margin: '15px auto' }} />
      <MySelect
        selected={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'title' },
          { value: 'body', name: 'body' },
        ]}
      />
      {posts.length !== 0
        ? <PostList remove={removePost} title="PostList" posts={posts} />
        : <h1>Posts not found</h1>}

    </div>
  );
}

export default App;
