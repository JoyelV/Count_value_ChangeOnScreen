import React,{useState} from 'react'

function App() {
  const [count,setCount] = useState(0);
  const increment = ()=>setCount(count+1);
  const decrement = ()=>setCount(count-1);
  return (
    <div className="App">
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
