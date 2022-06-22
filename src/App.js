import React, { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(4);
  const [value, setValue] = useState('Text in INPUT');

  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h2>{value}</h2>
      <button type="submit" onClick={increment}>Increment</button>
      <button type="submit" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
