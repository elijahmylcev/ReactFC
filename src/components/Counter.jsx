import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>

      <button type="submit" onClick={increment}>Increment</button>
      <button type="submit" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
