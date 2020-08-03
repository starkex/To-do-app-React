import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import {Button, FormControl, Input, InputLabel,} from '@material-ui/core';
import './App.css';
import Wall from './Wall';
import Todos from './firebase';

function App() {
  const [todos, settodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    Todos.collection('Tasks').onSnapshot(snapshot =>{
         settodos(snapshot.docs.map(doc => doc.data().todos))
    })
  }, [])

  const para = (event)=>{
    event.preventDefault();
    settodos([...todos,input]);
  }
  return (
    <div className="App">
          <h1> nigger back to life </h1>
          <ul>
         {todos.map(todos=> 
         <Wall text={todos}/>
         //<li>{todos}</li>
         )}
        </ul>
         <br></br>
         <FormControl>
         <InputLabel> Typr here....</InputLabel>
         <Input value = { input}onChange = {event => setInput(event.target.value)}/>
         <br></br>
         <Button disabled = {!input}
         onClick = {para} > Insert it </Button>

         </FormControl>

    </div> 
  );
}

export default App;
