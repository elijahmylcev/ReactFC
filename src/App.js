import React, { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(4);

  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button type="submit" onClick={increment}>Increment</button>
      <button type="submit" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
