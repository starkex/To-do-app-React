import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import {Button, FormControl, Input, InputLabel,} from '@material-ui/core';
import './App.css';
import Wall from './Wall';
import Todos from './firebase';
import firebase from 'firebase';
import db from './firebase';

function App() {
  const [todos, settodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('Tasks').orderBy('timestamp','desc').onSnapshot(snapshot =>{
         settodos(snapshot.docs.map(doc=> ({id: doc.id, todo:doc.data().todo})))
    })
  }, [])

  const para = (event)=>{
    event.preventDefault();
     
     db.collection('Todos').add({
       todo:input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
       //firestore
     })

    settodos([...todos,input]);
    setInput('');

  }
  return (
    <div className="App">
          <h1> Set Your Tasks Here !! </h1>
          <ul>
         {todos.map(todo=> 
         <Wall text={todo}/>
         //<li>{todos}</li>
         )}
         </ul>
         <br></br>
         <FormControl>
         <InputLabel> Typr here....</InputLabel>
         <Input value = {input}onChange = {event => setInput(event.target.value)}/>
         <br></br>
         <Button disabled = {!input}
         onClick = {para} > Insert it </Button>

         </FormControl>

    </div> 
  );
}

export default App;
