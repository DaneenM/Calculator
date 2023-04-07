import {useState} from 'react';
import './App.css';

function App() {

const [count, setCount] = useState(0);


const incval=()=>{
  setCount(count+1)
}

const decval=()=>{
  setCount(count-1)
}

const handleReset = () => {
  setCount(0);
}

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={incval}>INCREMENT</button>
      <h2>{count}</h2>
      <button onClick={decval}>DECREMENT</button>
      <h2>Reset Button</h2>
      <button id='reset' onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;
