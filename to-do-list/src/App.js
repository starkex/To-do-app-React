import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, settodos] = useState(["niggas for life", "homies for life"]);
  const [input, setInput] = useState('');
  const [pop, setpop] = useState([]);
  const para = (event)=>{
    setpop([pop,input]);
  }
  return (
    <div className="App">
          <h1> nigger back to life </h1>
         {todos.map(todos=> <li>{todos}</li>)
         }
         <input value={input} onChange={event=>setInput(event.target.value)}/>
         <button onClick={para}>Insert it</button>
         <p> {pop} </p>
    </div>
  );
}

export default App;
