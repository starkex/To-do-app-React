import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, settodos] = useState(["niggas for life", "homies for life"]);
  const [input, setInput] = useState('');
  return (
    <div className="App">
          <h1> nigger back to life </h1>
         {todos.map(todos=> <li>{todos}</li> )
         }
         <input value={input} onChange={event=>setInput(event.target.value)}/>
         <button onClick={addto}>Insert it</button>
    </div>
  );
}

export default App;
