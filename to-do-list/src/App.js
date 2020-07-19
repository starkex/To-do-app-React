import React,{useState} from 'react';
import logo from './logo.svg';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';

function App() {
  const [todos, settodos] = useState(["niggas for life", "homies for life"]);
  const [input, setInput] = useState('');
  const [pop, setpop] = useState([]);
  const para = (event)=>{
    event.preventDefault();
    setpop([pop,input]);
  }
  return (
    <div className="App">
          <h1> nigger back to life </h1>
         {todos.map(todos=> <li>{todos}</li>)
         }
         <br></br>
         <FormControl>
         <InputLabel> Typer here....</InputLabel>
         <Input value = { input}onChange = {event => setInput(event.target.value)}/>
         <br></br>
         <Button disabled = {!input}
         onClick = {para} > Insert it </Button>

         </FormControl>
<br></br>
         <p> {pop} </p>
    </div> 
  );
}

export default App;
