import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'
import db from './firebase'

function Wall(props) {
    return(
        <React.Fragment>
         <List className="sup">
                        <ListItem >
                           <ListItemText primary={props.todo.todo} secondary="Task"/>
                        </ListItem>
                    </List>
        <Button onClick={event => {db.collection('todos').doc(props.todos.id).delete()}}> Delete</Button>
        </React.Fragment>
    );
                
               
}

export default Wall
