import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]= useState(0);

  function handleAdd(){
    setCount(count+1);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">ADD</button>
        <button onClick={()=>setCount(count-1)} className="sub">SUB</button>
        <button onClick={()=>setCount(0)} className="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
